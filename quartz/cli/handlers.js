import { promises } from "fs"
import path from "path"
import esbuild from "esbuild"
import { styleText } from "util"
import { sassPlugin } from "esbuild-sass-plugin"
import fs from "fs"
import { intro, outro } from "@clack/prompts"
import chokidar from "chokidar"
import prettyBytes from "pretty-bytes"
import { execSync, spawnSync } from "child_process"
import http from "http"
import serveHandler from "serve-handler"
import { Mutex } from "async-mutex"
import {
  popContentFolder,
  stashContentFolder,
} from "./helpers.js"
import {
  handlePluginResolve,
} from "./plugin-git-handlers.js"
import {
  createConfigFromTemplate,
  updateGlobalConfig,
} from "./plugin-data.js"
import {
  QUARTZ_SOURCE_REPO,
  ORIGIN_NAME,
  version,
  fp,
  cacheFile,
  cwd,
} from "./constants.js"

function resolveContentPath(contentPath) {
  if (path.isAbsolute(contentPath)) return path.relative(cwd, contentPath)
  return path.join(cwd, contentPath)
}

export async function handleCreate(argv) {
  console.log()
  intro(styleText(["bgGreen", "black"], ` Quartz v${version} `))
  let template = argv.template?.toLowerCase()
  let baseUrl = argv.baseUrl

  createConfigFromTemplate(template && template !== "default" ? template : "default")
  updateGlobalConfig({ baseUrl })
  await handlePluginResolve()

  execSync(`git remote show upstream || git remote add upstream ${QUARTZ_SOURCE_REPO}`, {
    stdio: "ignore",
  })

  outro(`You're all set! Not sure what to do next? Try:
  • Customizing Quartz a bit more by editing \`quartz.config.yaml\`
  • Running \`npx quartz build --serve\` to preview your Quartz locally
  • Hosting your Quartz online (see: https://quartz.jzhao.xyz/hosting)
`)
}

export async function handleBuild(argv) {
  if (argv.concurrency !== undefined && argv.concurrency < 1) {
    console.error("Concurrency must be at least 1")
    process.exit(1)
  }

  if (argv.serve) {
    argv.watch = true
  }

  console.log(`\n${styleText(["bgGreen", "black"], ` Quartz v${version} `)} \n`)
  await handlePluginResolve()
  const ctx = await esbuild.context({
    entryPoints: [fp],
    outfile: cacheFile,
    bundle: true,
    keepNames: true,
    minifyWhitespace: true,
    minifySyntax: true,
    platform: "node",
    format: "esm",
    jsx: "automatic",
    jsxImportSource: "preact",
    packages: "external",
    metafile: true,
    sourcemap: true,
    sourcesContent: false,
    logOverride: {
      "direct-eval": "silent",
      "equals-negative-zero": "silent",
      "duplicate-object-key": "silent",
    },
    plugins: [
      sassPlugin({
        type: "css-text",
        cssImports: true,
      }),
      sassPlugin({
        filter: /\.inline\.scss$/,
        type: "css",
        cssImports: true,
      }),
      {
        name: "inline-script-loader",
        setup(build) {
          build.onLoad({ filter: /\.inline\.(ts|js)$/ }, async (args) => {
            let text = await promises.readFile(args.path, "utf8")
            text = text.replace("export default", "")
            text = text.replace("export", "")

            const sourcefile = path.relative(path.resolve("."), args.path)
            const resolveDir = path.dirname(sourcefile)
            const transpiled = await esbuild.build({
              stdin: {
                contents: text,
                loader: "ts",
                resolveDir,
                sourcefile,
              },
              write: false,
              bundle: true,
              minify: true,
              platform: "browser",
              format: "esm",
            })
            const rawMod = transpiled.outputFiles[0].text
            return {
              contents: rawMod,
              loader: "text",
            }
          })
        },
      },
    ],
  })

  const buildMutex = new Mutex()
  let lastBuildMs = 0
  let cleanupBuild = null
  const build = async (clientRefresh = () => {}) => {
    const buildStart = new Date().getTime()
    lastBuildMs = buildStart
    const release = await buildMutex.acquire()
    if (lastBuildMs > buildStart) {
      release()
      return
    }

    if (cleanupBuild) {
      console.log(styleText("yellow", "Detected a source code change, doing a hard rebuild..."))
      await cleanupBuild()
    }

    const result = await ctx.rebuild().catch((err) => {
      console.error(
        `${styleText("red", "Failed to build Quartz.")} Check for syntax errors in your configuration or plugins.`,
      )
      console.log(`Reason: ${styleText("gray", err.message ?? String(err))}`)
      process.exit(1)
    })
    release()

    if (argv.bundleInfo) {
      const outputFileName = "quartz/.quartz-cache/transpiled-build.mjs"
      const meta = result.metafile.outputs[outputFileName]
      console.log(
        `Successfully transpiled ${Object.keys(meta.inputs).length} files (${prettyBytes(
          meta.bytes,
        )})`,
      )
    }

    const mod = await import(`../../${cacheFile}?update=${Date.now()}`)
    const buildQuartz = mod.default ?? mod.buildQuartz
    cleanupBuild = await buildQuartz(argv, buildMutex, clientRefresh)
    clientRefresh()
  }

  let clientRefresh = () => {}
  await build(clientRefresh)

  if (argv.serve) {
    const server = http.createServer(async (req, res) => {
      await serveHandler(req, res, {
        public: argv.output,
        directoryListing: false,
      })
    })
    const port = argv.port ?? 8080
    server.listen(port, () => {
      console.log(`Started a Quartz server listening at http://localhost:${port}`)
    })
  }

  if (argv.watch) {
    chokidar.watch(".", { ignoreInitial: true }).on("all", async () => build(clientRefresh))
  } else {
    if (cleanupBuild) {
      await cleanupBuild()
    }
    await ctx.dispose()
  }
}

export async function handleUpgrade(_argv) {
  console.log(styleText("yellow", "Upgrade is not used in this CI test-bed."))
}

export async function handleRestore(argv) {
  const contentFolder = resolveContentPath(argv.directory)
  await popContentFolder(contentFolder)
}

export async function handleSync(argv) {
  const contentFolder = resolveContentPath(argv.directory)
  console.log(`\n${styleText(["bgGreen", "black"], ` Quartz v${version} `)}\n`)

  if (argv.commit) {
    const currentTimestamp = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    })
    const commitMessage = argv.message ?? `Quartz sync: ${currentTimestamp}`
    spawnSync("git", ["add", "."], { stdio: "inherit" })
    spawnSync("git", ["commit", "-m", commitMessage], { stdio: "inherit" })
  }

  await stashContentFolder(contentFolder)
  await popContentFolder(contentFolder)

  if (argv.push) {
    console.log("Pushing your changes")
    const currentBranch = execSync("git rev-parse --abbrev-ref HEAD").toString().trim()
    const res = spawnSync("git", ["push", "-uf", ORIGIN_NAME, currentBranch], {
      stdio: "inherit",
    })
    if (res.status !== 0) {
      console.log(
        styleText("red", `An error occurred while pushing to remote ${ORIGIN_NAME}.`) +
          "\nCheck that you have push access to the remote repository.",
      )
      return
    }
  }

  console.log(styleText("green", "Done!"))
}

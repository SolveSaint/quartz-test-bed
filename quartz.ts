import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig({
  pageTitle: "Quartz Test Bed",
  baseUrl: "solvesaint.github.io/quartz-test-bed",
})

export default config
export const layout = await loadQuartzLayout()

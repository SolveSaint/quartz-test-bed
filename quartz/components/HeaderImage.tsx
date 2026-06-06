import { QuartzComponent, QuartzComponentConstructor } from "./types"

const HeaderImage: QuartzComponent = () => {
  return (
    <>
      <style>{`
        /* Test-bed scoped repairs. Keep these narrow: no global h1 or Explorer row rules. */
        #quartz-root h1.article-title {
          display: inline-block !important;
          width: fit-content !important;
          max-width: calc(100% - 1rem) !important;
          margin-top: 0.35rem !important;
          margin-bottom: 1.15rem !important;
          padding: 0.10em 0.34em 0.12em 1.18rem !important;
          line-height: 1.06 !important;
        }

        #quartz-root h1.article-title::before {
          inset: -0.06em -0.18em !important;
          border-radius: 10px !important;
        }

        #quartz-root .left.sidebar .explorer .title-button,
        #quartz-root .left.sidebar .explorer button {
          font-size: 1.12rem !important;
          line-height: 1.25 !important;
          min-height: 2.15rem !important;
          padding: 0.38rem 0.85rem !important;
          font-weight: 650 !important;
        }

        #quartz-root .left.sidebar .explorer :is(h1, h2, h3, h4, h5, h6) {
          font-size: 1.12rem !important;
          line-height: 1.25 !important;
        }

        #quartz-root .left.sidebar .explorer svg,
        #quartz-root .left.sidebar .explorer button svg,
        #quartz-root .left.sidebar .explorer .title-button svg {
          width: 1.15rem !important;
          height: 1.15rem !important;
        }
      `}</style>
      <div style={{ width: "100%", textAlign: "center", marginBottom: "1rem" }}>
        <img
          src="https://solvesaint.github.io/quartz-test-bed/static/banner-forest.svg"
          alt="Quartz Test Bed banner"
          style={{ maxWidth: "100%", height: "auto", borderRadius: "14px" }}
        />
      </div>
    </>
  )
}

export default (() => HeaderImage) satisfies QuartzComponentConstructor

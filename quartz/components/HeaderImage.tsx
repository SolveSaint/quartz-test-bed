import { QuartzComponent, QuartzComponentConstructor } from "./types"

const HeaderImage: QuartzComponent = () => {
  return (
    <>
      <style>{`
        #quartz-root h1.article-title {
          display: inline-block !important;
          width: fit-content !important;
          max-width: calc(100% - 1rem) !important;
          margin-top: 0.18rem !important;
          margin-bottom: 1.05rem !important;
          padding: 0.06em 0.24em 0.08em 0.96rem !important;
          line-height: 1.02 !important;
          font-size: clamp(1.75rem, 2.35vw, 2.35rem) !important;
        }

        #quartz-root h1.article-title::before {
          inset: -0.035em -0.12em !important;
          border-radius: 8px !important;
        }

        #quartz-root h1.article-title::after {
          left: 0.22rem !important;
          top: 0.26em !important;
          font-size: 0.92em !important;
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

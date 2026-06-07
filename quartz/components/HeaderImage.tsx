import { QuartzComponent, QuartzComponentConstructor } from "./types"

const HeaderImage: QuartzComponent = () => {
  return (
    <>
      <style>{`
        #quartz-root .center .page-header header {
          margin-bottom: -3.0rem !important;
        }

        #quartz-root .center .page-header .content-meta {
          margin-top: 0 !important;
          margin-bottom: 0.35rem !important;
        }

        #quartz-root .index-title-card {
          position: relative;
          display: inline-block;
          width: fit-content;
          max-width: 28rem;
          margin-top: -0.45em;
          margin-bottom: 1.05rem;
          padding-top: 0.06em;
          padding-right: 0.24em;
          padding-bottom: 0.08em;
          padding-left: 0.96rem;
          line-height: 1.02;
          font-size: 2rem;
          font-weight: 700;
          border-radius: 8px;
          background-image: linear-gradient(180deg, #fff9dd 0%, #ffefb8 18%, #f0d37a 40%, #fff3c8 52%, #e2c36a 70%, #b8953a 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 1px 0 rgba(0,0,0,0.45), 0 3px 8px rgba(0,0,0,0.30), 0 0 14px rgba(255,235,170,0.22);
          overflow: visible;
        }

        #quartz-root .index-title-card::before {
          content: "";
          position: absolute;
          inset: -0.035em -0.12em;
          border-radius: 8px;
          z-index: -1;
          background: rgba(0,0,0,0.42);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 10px 26px rgba(0,0,0,0.35);
        }

        #quartz-root .index-title-card::after {
          content: "›";
          position: absolute;
          left: 0.22rem;
          top: 0.26em;
          font-size: 0.92em;
          line-height: 1;
          color: rgba(96,163,255,0.9);
          opacity: 0;
        }

        #quartz-root .index-title-card:hover::after {
          opacity: 0.95;
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
      <div style={{ width: "100%", textAlign: "center", marginBottom: "0" }}>
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

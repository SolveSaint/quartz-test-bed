import { QuartzComponent, QuartzComponentConstructor } from "./types"

const FogShapeStyles: QuartzComponent = () => {
  return (
    <style>{`
      html body::before {
        background-image:
          url("/quartz-test-bed/static/trees-row-front.svg"),
          url("/quartz-test-bed/static/trees-row-mid.svg"),
          url("/quartz-test-bed/static/trees-row-far.svg"),
          url("/quartz-test-bed/static/stars-twinkle.svg") !important;
        background-repeat: repeat-x, repeat-x, repeat-x, repeat !important;
        background-size: 1600px 760px, 1800px 700px, 1900px 560px, 1400px 900px !important;
        background-position: 0 calc(100% + 24vh), 0 calc(100% + 2vh), 0 100%, 0 0 !important;
      }
      html body::after {
        background: transparent !important;
      }
    `}</style>
  )
}

export default (() => FogShapeStyles) satisfies QuartzComponentConstructor

import { QuartzComponent, QuartzComponentConstructor } from "./types"

const FogShapeStyles: QuartzComponent = () => {
  return (
    <style>{`
      body::before {
        background-image:
          url("/quartz-test-bed/static/trees-row-front.svg"),
          url("/quartz-test-bed/static/fog-wisps-near.svg"),
          radial-gradient(ellipse at 78% 70%, rgba(176,140,230,0.18), transparent 22rem),
          url("/quartz-test-bed/static/trees-row-mid.svg"),
          url("/quartz-test-bed/static/fog-wisps-mid.svg"),
          radial-gradient(ellipse at 70% 60%, rgba(105,220,155,0.18), transparent 28rem),
          url("/quartz-test-bed/static/trees-row-far.svg"),
          url("/quartz-test-bed/static/fog-wisps-far.svg"),
          radial-gradient(ellipse at 48% 46%, rgba(135,190,235,0.20), transparent 34rem),
          url("/quartz-test-bed/static/stars-twinkle.svg") !important;
        background-repeat: repeat-x, repeat-x, no-repeat, repeat-x, repeat-x, no-repeat, repeat-x, repeat-x, no-repeat, repeat !important;
      }
    `}</style>
  )
}

export default (() => FogShapeStyles) satisfies QuartzComponentConstructor

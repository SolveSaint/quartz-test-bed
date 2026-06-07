import { QuartzComponent, QuartzComponentConstructor } from "./types"

const FogShapeStyles: QuartzComponent = () => null

FogShapeStyles.css = `
body::before {
  background-image:
    url("./static/trees-row-front.svg"),
    url("./static/fog-wisps-near.svg"),
    url("./static/trees-row-mid.svg"),
    url("./static/fog-wisps-mid.svg"),
    url("./static/trees-row-far.svg"),
    url("./static/fog-wisps-far.svg"),
    url("./static/stars-twinkle.svg") !important;
  background-repeat: repeat-x, repeat-x, repeat-x, repeat-x, repeat-x, repeat-x, repeat !important;
  background-size:
    1600px 760px,
    1700px 90vh,
    1800px 700px,
    1900px 80vh,
    1900px 560px,
    2200px 75vh,
    1400px 900px !important;
  background-position:
    0 calc(100% + 24vh),
    -12vw 10vh,
    0 calc(100% + 2vh),
    8vw 14vh,
    0 100%,
    -18vw 8vh,
    0 0 !important;
}

body::after {
  background: transparent !important;
}

@keyframes qtbLayeredParallax {
  0% {
    opacity: 0.88;
    background-position:
      0 calc(100% + 24vh),
      -12vw 10vh,
      0 calc(100% + 2vh),
      8vw 14vh,
      0 100%,
      -18vw 8vh,
      0 0;
  }
  38% { opacity: 1; }
  65% { opacity: 0.86; }
  100% {
    opacity: 0.93;
    background-position:
      -1600px calc(100% + 24vh),
      -92vw 10vh,
      -900px calc(100% + 2vh),
      -52vw 14vh,
      -350px 100%,
      -48vw 8vh,
      -140px 0;
  }
}
`

export default (() => FogShapeStyles) satisfies QuartzComponentConstructor

import { QuartzComponent, QuartzComponentConstructor } from "./types"

const FogShapeStyles: QuartzComponent = () => null

FogShapeStyles.css = `
body::before {
  background-image:
    url("./static/trees-row-front.svg"),
    url("./static/trees-row-mid.svg"),
    url("./static/trees-row-far.svg"),
    url("./static/stars-twinkle.svg") !important;
  background-repeat: repeat-x, repeat-x, repeat-x, repeat !important;
  background-size:
    1600px 760px,
    1800px 700px,
    1900px 560px,
    1400px 900px !important;
  background-position:
    0 calc(100% + 24vh),
    0 calc(100% + 2vh),
    0 100%,
    0 0 !important;
}

body::after {
  background: transparent !important;
}
`

export default (() => FogShapeStyles) satisfies QuartzComponentConstructor

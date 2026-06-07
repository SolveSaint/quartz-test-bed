import { QuartzComponent, QuartzComponentConstructor } from "./types"

const FogShapeStyles: QuartzComponent = () => null

FogShapeStyles.css = `
body::before {
  background-image:
    url("./static/trees-row-front.svg"),
    url("./static/trees-row-mid.svg"),
    url("./static/trees-row-far.svg"),
    url("./static/stars-twinkle.svg") !important;
}
`

export default (() => FogShapeStyles) satisfies QuartzComponentConstructor

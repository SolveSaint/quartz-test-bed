import { QuartzComponent, QuartzComponentConstructor } from "./types"

const FogShapeStyles: QuartzComponent = () => {
  return <link rel="stylesheet" href="/quartz-test-bed/static/fog-reset.css" />
}

export default (() => FogShapeStyles) satisfies QuartzComponentConstructor

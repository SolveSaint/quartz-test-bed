import { QuartzComponent, QuartzComponentConstructor } from "./types"

const FogShapeStyles: QuartzComponent = () => {
  return <style>{`@import url("/quartz-test-bed/static/fog-reset.css");`}</style>
}

export default (() => FogShapeStyles) satisfies QuartzComponentConstructor

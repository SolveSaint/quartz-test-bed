import { QuartzComponent, QuartzComponentConstructor } from "./types"

const HeaderImage: QuartzComponent = () => {
  return (
    <div style={{ width: "100%", textAlign: "center", marginBottom: "1rem" }}>
      <img
        src="https://solvesaint.github.io/quartz-test-bed/static/banner-forest.svg"
        alt="Quartz Test Bed banner"
        style={{ maxWidth: "100%", height: "auto", borderRadius: "14px" }}
      />
    </div>
  )
}

export default (() => HeaderImage) satisfies QuartzComponentConstructor

import { QuartzComponent, QuartzComponentConstructor } from "./types"

const HeaderImage: QuartzComponent = () => {
  return (
    <div class="site-hero-banner" aria-label="Quartz Test Bed banner">
      <div class="site-hero-kicker">Quartz Base Theme</div>
      <div class="site-hero-title">Quartz Test Bed</div>
      <div class="site-hero-subtitle">A reusable dark forest Quartz template with block navigation, striping, and chevrons.</div>
    </div>
  )
}

export default (() => HeaderImage) satisfies QuartzComponentConstructor

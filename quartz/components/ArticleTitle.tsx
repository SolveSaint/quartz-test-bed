import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  if (title) {
    return <h1 class={classNames(displayClass, "article-title compact-article-title avv-title")}>{title}</h1>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}

.compact-article-title {
  position: relative;
  display: inline-block !important;
  width: fit-content !important;
  max-width: 28rem !important;
  margin-top: -0.45em !important;
  margin-bottom: 1.05rem !important;
  padding: 0.06em 0.24em 0.08em 0.96rem !important;
  line-height: 1.02 !important;
  font-size: 2rem !important;
  border-radius: 8px;
  background-image: linear-gradient(180deg, #fff9dd 0%, #ffefb8 18%, #f0d37a 40%, #fff3c8 52%, #e2c36a 70%, #b8953a 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
  text-shadow: 0 1px 0 rgba(0,0,0,0.45), 0 3px 8px rgba(0,0,0,0.30), 0 0 14px rgba(255,235,170,0.22);
  overflow: visible;
}

.compact-article-title::before {
  content: "";
  position: absolute;
  inset: -0.035em -0.12em;
  border-radius: 8px;
  z-index: -1;
  background: linear-gradient(180deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.30) 55%, rgba(0,0,0,0.48) 100%);
  border: 1px solid rgba(255,255,255,0.10);
  box-shadow: 0 10px 26px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06);
  backdrop-filter: blur(2.2px);
  -webkit-backdrop-filter: blur(2.2px);
}

.compact-article-title::after {
  content: "›";
  position: absolute;
  left: 0.22rem;
  top: 0.26em;
  font-size: 0.92em;
  line-height: 1;
  color: rgba(96,163,255,0.9);
  z-index: 2;
  opacity: 0;
  transform: translateX(-2px);
  pointer-events: none;
  transition: opacity 220ms ease, transform 220ms ease;
}

.compact-article-title:hover::after,
.compact-article-title:focus-within::after {
  opacity: 0.95;
  transform: translateX(0);
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor

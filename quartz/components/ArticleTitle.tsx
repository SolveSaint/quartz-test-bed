import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  if (title) {
    return <h1 class={classNames(displayClass, "article-title compact-article-title")}>{title}</h1>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}

.compact-article-title {
  display: inline-block !important;
  width: fit-content !important;
  max-width: 32rem !important;
  margin-top: 0.18rem !important;
  margin-bottom: 1.05rem !important;
  padding-top: 0.06em !important;
  padding-right: 0.24em !important;
  padding-bottom: 0.08em !important;
  padding-left: 0.96rem !important;
  line-height: 1.02 !important;
  font-size: 2rem !important;
}

.compact-article-title::before {
  inset: -0.035em -0.12em !important;
  border-radius: 8px !important;
}

.compact-article-title::after {
  left: 0.22rem !important;
  top: 0.26em !important;
  font-size: 0.92em !important;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor

import * as React from 'react'

import { withMarkdown } from '../withMarkdown'

import { TitleProps } from './Title.interface'
import {
  HeaderMaxiTitleComponent,
  HeaderBigTitleComponent,
  HeaderTitleComponent,
  HeaderSmallTitleComponent,
  ArticleTitleComponent,
  SectionTitleComponent,
  RegularTitleComponent,
} from './Title.style'

const components = {
  headerMaxi: HeaderMaxiTitleComponent,
  headerBig: HeaderBigTitleComponent,
  header: HeaderTitleComponent,
  headerSmall: HeaderSmallTitleComponent,
  article: ArticleTitleComponent,
  section: SectionTitleComponent,
  regular: RegularTitleComponent,
}

const InnerTitle = React.forwardRef<HTMLHeadingElement, TitleProps>(
  (props, ref) => {
    const { type, ...rest } = props

    const TitleComponent = components[type] || HeaderMaxiTitleComponent

    return <TitleComponent ref={ref} {...rest} />
  }
)

export const Title = withMarkdown<HTMLHeadingElement>({ inline: true })<
  TitleProps
>(InnerTitle)

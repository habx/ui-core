import * as React from 'react'

import { withMarkdown } from '../withMarkdown'

import { TitleProps, TitleTypes } from './Title.interface'
import {
  HeaderMaxiTitleComponent,
  HeaderBigTitleComponent,
  HeaderTitleComponent,
  HeaderSmallTitleComponent,
  SectionTitleComponent,
  RegularTitleComponent,
} from './Title.style'

const components: Record<TitleTypes, React.ForwardRefExoticComponent<any>> = {
  headerMaxi: HeaderMaxiTitleComponent,
  headerBig: HeaderBigTitleComponent,
  header: HeaderTitleComponent,
  headerSmall: HeaderSmallTitleComponent,
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

export const Title = withMarkdown<HTMLHeadingElement>({
  inline: true,
})<TitleProps>(InnerTitle)

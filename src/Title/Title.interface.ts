import * as React from 'react'

import { ThemeOverridesProps } from '../_internal/types'

export type TitleTypes =
  | 'headerMaxi'
  | 'headerBig'
  | 'header'
  | 'headerSmall'
  | 'article'
  | 'section'
  | 'regular'

export default interface TitleProps
  extends ThemeOverridesProps,
    React.HTMLAttributes<HTMLHeadingElement> {
  type: TitleTypes
}

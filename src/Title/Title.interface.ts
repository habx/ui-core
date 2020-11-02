import * as React from 'react'

import { styledAs, ThemeOverridesProps } from '../_internal/types'

export type TitleTypes =
  | 'headerMaxi'
  | 'headerBig'
  | 'header'
  | 'headerSmall'
  | 'article'
  | 'section'
  | 'regular'

export interface TitleProps
  extends ThemeOverridesProps,
    React.HTMLAttributes<HTMLHeadingElement> {
  type: TitleTypes
  color?: string
  opacity?: number
  as?: styledAs
}

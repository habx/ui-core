import * as React from 'react'

import { styledAs, ThemeOverridesProps } from '../_internal/types'

export type TitleTypes =
  | 'large'
  | 'emphasis'
  | 'regular'
  | 'caption'
  | 'captionSmall'

export default interface TextProps
  extends ThemeOverridesProps,
    React.HTMLAttributes<HTMLHeadingElement> {
  type?: TitleTypes
  color?: string
  opacity?: number
  as?: styledAs
}

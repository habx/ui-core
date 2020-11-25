import * as React from 'react'

import { styledAs, ThemeOverridesProps } from '../_internal/types'
import { TypographyColors } from '../theme'

export type TextTypes =
  | 'veryLarge'
  | 'large'
  | 'emphasis'
  | 'regular'
  | 'caption'
  | 'captionSmall'

export interface TextProps
  extends ThemeOverridesProps,
    React.HTMLAttributes<HTMLHeadingElement> {
  type?: TextTypes
  color?: string
  variation?: keyof TypographyColors
  as?: styledAs
  inline?: boolean
}

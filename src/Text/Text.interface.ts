import * as React from 'react'

import { styledAs } from '../_internal/types'
import { Color } from '../color'
import { TypographyColors } from '../theme'

export type TextTypes =
  | 'veryLarge'
  | 'large'
  | 'emphasis'
  | 'regular'
  | 'small'
  | 'caption'
  | 'captionSmall'

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'> {
  type?: TextTypes
  color?: Color
  variation?: keyof TypographyColors
  as?: styledAs
  inline?: boolean
}

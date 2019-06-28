import * as React from 'react'

import { ThemeOverridesProps } from '../_internal/types'

export type TitleTypes =
  | 'display'
  | 'hero1'
  | 'hero2'
  | 'sectionTitle'
  | 'columnTitle'
  | 'title'

export default interface TitleProps
  extends ThemeOverridesProps,
    React.HTMLAttributes<HTMLHeadingElement> {
  type: TitleTypes
}

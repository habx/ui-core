import * as React from 'react'

import { ThemeOverridesProps } from '../_internal/types'

export type TitleTypes = 'emphasis' | 'regular' | 'caption' | 'captionSmall'

export default interface TextProps
  extends ThemeOverridesProps,
    React.HTMLAttributes<HTMLHeadingElement> {
  type?: TitleTypes
  color?: string
}

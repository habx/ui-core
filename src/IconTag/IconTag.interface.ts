import * as React from 'react'

import { styledAs, ThemeOverridesProps } from '../_internal/types'
import { IconProps } from '../Icon/Icon.interface'

export interface IconTagProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Pick<IconProps, 'icon'>,
    ThemeOverridesProps {
  large?: boolean
  neutral?: boolean
  small?: boolean
  as?: styledAs
}

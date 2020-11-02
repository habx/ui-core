import * as React from 'react'

import { styledAs } from '../_internal/types'
import { IconProps } from '../Icon'

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Pick<IconProps, 'icon' | 'colored'> {
  as?: styledAs
  opacity?: number
  disabled?: boolean
  small?: boolean
  large?: boolean
  tiny?: boolean
  background?: 'grey' | 'white' | 'inherit' | 'none'
}

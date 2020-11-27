import * as React from 'react'

import { styledAs, ThemeOverridesProps } from '../_internal/types'
import { IconProps } from '../Icon'

export interface FloatingIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Pick<ThemeOverridesProps, 'error'>,
    Pick<IconProps, 'icon' | 'colored'> {
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
  fixed?: boolean

  /**
   * outline style activation
   */
  outline?: boolean

  /**
   * disabled style activation
   */
  disabled?: boolean

  /**
   * small style activation
   */
  small?: boolean

  /**
   * @ignore
   */
  as?: styledAs
}

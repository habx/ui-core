import * as React from 'react'

import { styledAs, ThemeOverridesProps } from '../_internal/types'

export interface NavigationButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>,
    Pick<ThemeOverridesProps, 'secondary'> {
  /**
   * @ignore
   */
  as?: styledAs

  /**
   * @default false
   */
  previous?: boolean

  /**
   * @default false
   */
  large?: boolean

  /**
   * @default false
   */
  small?: boolean

  /**
   * @default "navigation"
   */
  usage?: 'navigation' | 'toggle'
}

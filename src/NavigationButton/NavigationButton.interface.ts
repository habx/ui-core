import * as React from 'react'

import { Except, styledAs } from '../_internal/types'

export interface NavigationButtonProps
  extends Except<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /**
   * @ignore
   */
  as?: styledAs

  /**
   * @default false
   */
  secondary?: boolean

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

import * as React from 'react'

export type styledAs = keyof JSX.IntrinsicElements | React.ComponentType<any>

export interface ThemeOverridesProps {
  /**
   * primary style activation
   */
  primary?: boolean

  /**
   * secondary style activation
   */
  secondary?: boolean

  /**
   * warning style activation
   */
  warning?: boolean

  /**
   * error style activation
   */
  error?: boolean

  /**
   * success style activation
   */
  success?: boolean
}

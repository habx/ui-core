import * as React from 'react'

export type Except<BaseType, ExcludedElements> = Pick<
  BaseType,
  Exclude<keyof BaseType, ExcludedElements>
>

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
}

export interface Button
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ThemeOverridesProps {
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
   * large style activation
   */
  large?: boolean
}

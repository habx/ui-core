import * as React from 'react'

import DesignSystemTheme from '../theme/theme.interface'

export type Except<BaseType, ExcludedElements> = Pick<
  BaseType,
  Exclude<keyof BaseType, ExcludedElements>
>

export type styledAs = keyof JSX.IntrinsicElements | React.ComponentType<any>

export interface ThemeOverridesProps {
  /**
   * primary style activation
   * @default true
   */
  primary?: boolean
  /**
   * secondary style activation
   * @default false
   */
  secondary?: boolean
  /**
   * warning style activation
   * @default false
   */
  warning?: boolean
}

export interface Button
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ThemeOverridesProps {
  /**
   * outline style activation
   * @default false
   */
  outline?: boolean
  /**
   * disabled style activation
   * @default false
   */
  disabled?: boolean
  /**
   * small style activation
   * @default false
   */
  small?: boolean
  /**
   * large style activation
   * @default false
   */
  large?: boolean
}

export interface StyledTheme {
  uiCore: DesignSystemTheme
  uiCoreRoot: DesignSystemTheme
}

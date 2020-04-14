import * as React from 'react'

import DesignSystemTheme from '../theme/theme.interface'

export type Except<BaseType, ExcludedElements> = Pick<
  BaseType,
  Exclude<keyof BaseType, ExcludedElements>
>

export type styledAs = keyof JSX.IntrinsicElements | React.ComponentType<any>

export interface ThemeOverridesProps {
  primary?: boolean
  secondary?: boolean
  warning?: boolean
}

export interface Button
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ThemeOverridesProps {
  disabled?: boolean
  small?: boolean
  large?: boolean
}

export interface StyledTheme {
  uiCore: DesignSystemTheme
  uiCoreRoot: DesignSystemTheme
}

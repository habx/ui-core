import * as React from 'react'

import DesignSystemTheme from '../theme/theme.interface'

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

export interface styledTheme {
  designSystem: DesignSystemTheme
}

interface themeAccessorProps extends ThemeOverridesProps {
  theme: styledTheme
}

export type themeAccessor = (props: themeAccessorProps) => string

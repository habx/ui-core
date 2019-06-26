import * as React from 'react'

import DesignSystemTheme from '../theme/theme.interface'

export interface ThemeOverridesProps {
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean
  quaternary?: boolean
}

export interface Button
  extends React.HTMLAttributes<HTMLButtonElement>,
    ThemeOverridesProps {
  warning?: boolean
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

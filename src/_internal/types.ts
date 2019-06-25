import * as React from 'react'

import DesignSystemTheme from '../theme/theme.interface'

export type styledTheme = {
  designSystem: DesignSystemTheme
}

export type themeAccessor = (props: {
  theme: styledTheme
  warning?: boolean
}) => string

export interface Button extends React.HTMLAttributes<HTMLButtonElement> {
  warning?: boolean
  info?: boolean
  disabled?: boolean
  small?: boolean
  large?: boolean

  color?: string
  hoverColor?: string

  type?: string
}

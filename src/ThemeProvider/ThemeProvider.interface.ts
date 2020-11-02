import * as React from 'react'

import { ColorFamilies, Fonts, Shadows } from '../theme/theme.interface'

export interface DesignSystemThemePatch {
  colors?: Partial<ColorFamilies>
  fonts?: Partial<Fonts>
  shadows?: Partial<Shadows>
  backgroundColor?: string
  isDark?: boolean
}

export interface ThemeProviderProps {
  theme?: DesignSystemThemePatch
  backgroundColor?: string
  children?: React.ReactNode
}

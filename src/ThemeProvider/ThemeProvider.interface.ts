import * as React from 'react'

import {
  ColorFamilies,
  Fonts,
  Shadows,
  TextColorVariations,
} from '../theme/theme.interface'

export interface DesignSystemThemePatch {
  colors?: Partial<ColorFamilies>
  textColors?: Partial<TextColorVariations>
  fonts?: Partial<Fonts>
  shadows?: Partial<Shadows>
  backgroundColor?: string
}

export default interface ThemeProviderProps {
  theme?: DesignSystemThemePatch
  isRoot?: boolean
  backgroundColor?: string
  children?: React.ReactChild
}

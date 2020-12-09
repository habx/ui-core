import * as React from 'react'

import { Color } from '../color'
import { ThemeVariant } from '../theme'

type PartialRecursive<T> = T extends object
  ? { [K in keyof T]?: PartialRecursive<T[K]> }
  : T

export interface DesignSystemThemePatch {
  backgroundColor?: Color
  light?: PartialRecursive<ThemeVariant>
  dark?: PartialRecursive<ThemeVariant>
}

export interface ThemeProviderProps {
  theme?: DesignSystemThemePatch
  preset?: 'dark' | 'light' | 'auto'
  children?: React.ReactNode
}

import * as React from 'react'

import { ThemeVariant } from '../theme'

type PartialRecursive<T> = T extends object
  ? { [K in keyof T]?: PartialRecursive<T[K]> }
  : T

export interface DesignSystemThemePatch {
  light?: PartialRecursive<ThemeVariant>
  dark?: PartialRecursive<ThemeVariant>
}

export interface ThemeProviderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  theme?: DesignSystemThemePatch
  preset?: 'dark' | 'light'
}

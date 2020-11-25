import * as React from 'react'

import { DesignSystemTheme } from '../theme'

type PartialRecursive<T> = T extends object
  ? { [K in keyof T]?: PartialRecursive<T[K]> }
  : T

export interface ThemeProviderProps {
  theme: PartialRecursive<DesignSystemTheme>
  children?: React.ReactNode
}

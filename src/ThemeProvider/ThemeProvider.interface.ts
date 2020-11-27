import * as React from 'react'

import { Color } from '../_internal/theme/color'
import { ThemeVariant } from '../theme'

type PartialRecursive<T> = T extends object
  ? { [K in keyof T]?: PartialRecursive<T[K]> }
  : T

export interface ThemeProviderProps {
  theme: {
    backgroundColor?: Color
    light?: PartialRecursive<ThemeVariant>
    dark?: PartialRecursive<ThemeVariant>
  }
  children?: React.ReactNode
}

import * as React from 'react'

import { ColorGetter } from '../_internal/theme/BackgroundThemeProvider'

export interface CardButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean
  backgroundColor?: ColorGetter

  /**
   * @default 'none'
   */
  spacing?: 'none' | 'narrow' | 'regular'
  active?: boolean
}

import * as React from 'react'

import { ColorGetter } from '../_internal/theme/BackgroundThemeProvider'

export interface CardButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  description: React.ReactNode
  illustration: string
  markdown?: boolean
  disabled?: boolean
  outline?: boolean
  backgroundColor?: ColorGetter
}

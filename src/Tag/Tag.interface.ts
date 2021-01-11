import * as React from 'react'

import { styledAs, ThemeOverridesProps } from '../_internal/types'

export interface TagProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ThemeOverridesProps {
  active?: boolean
  interactive?: boolean
  large?: boolean
  small?: boolean
  as?: styledAs
  elementRight?: React.ReactNode
  elementLeft?: React.ReactNode
}

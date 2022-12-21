import * as React from 'react'

import { styledAs, ThemeOverridesProps } from '../_internal/types'

export interface TagProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ThemeOverridesProps {
  active?: boolean
  as?: styledAs
  elementLeft?: React.ReactNode
  elementRight?: React.ReactNode
  interactive?: boolean
  large?: boolean
  small?: boolean
  tiny?: boolean
}

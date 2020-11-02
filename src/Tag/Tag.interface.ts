import * as React from 'react'

import { styledAs } from '../_internal/types'

export interface TagProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  interactive?: boolean
  large?: boolean
  small?: boolean
  as?: styledAs
  elementRight?: React.ReactNode
  elementLeft?: React.ReactNode
}

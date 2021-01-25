import * as React from 'react'

import { styledAs } from '../_internal/types'

export interface TabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  large?: boolean
  small?: boolean
  active?: boolean
  as?: styledAs
  elementRight?: React.ReactNode
  elementLeft?: React.ReactNode
}

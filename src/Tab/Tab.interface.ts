import * as React from 'react'

import { styledAs } from '../_internal/types'

export interface TabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  as?: styledAs
  elementLeft?: React.ReactNode
  elementRight?: React.ReactNode
  large?: boolean
  small?: boolean
  tiny?: boolean
}

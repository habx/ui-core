import * as React from 'react'

import { styledAs } from '../_internal/types'

export default interface MenuLineProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  as?: styledAs
  elementLeft?: React.ReactNode
  elementRight?: React.ReactNode
  secondary?: boolean
  active?: boolean
  warning?: boolean
  disabled?: boolean
}

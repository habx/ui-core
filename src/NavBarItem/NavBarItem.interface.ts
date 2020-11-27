import * as React from 'react'

import { styledAs } from '../_internal/types'

export interface NavBarItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  icon?: React.ReactNode
  label?: React.ReactNode
  description?: React.ReactNode
  active?: boolean
  bottom?: boolean
  disabled?: boolean
  as?: styledAs
}

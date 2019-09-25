import * as React from 'react'

import { styledAs } from '../_internal/types'

export default interface NavBarItemProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  backgroundColor?: string
  icon?: React.ReactNode
  label?: React.ReactNode
  active?: boolean
  bottom?: boolean
  disabled?: boolean
  as?: styledAs
}

import * as React from 'react'

import { styledAs } from '../_internal/types'

export default interface NavBarItemProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  backgroundColor?: string
  activeBackgroundColor?: string
  icon?: React.ReactNode
  tooltip?: React.ReactNode
  active?: boolean
  bottom?: boolean
  as?: styledAs
}

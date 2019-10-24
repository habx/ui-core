import * as React from 'react'

import { Except } from '../_internal/types'

export default interface NavBarProps
  extends Except<React.HTMLAttributes<HTMLUListElement>, 'title'> {
  title?: string | React.ReactNode
  color?: string
  backgroundColor?: string
}

export interface NavBarContextProps {
  isInsideANavBar: boolean
  isExpanded: boolean
  color: string
}

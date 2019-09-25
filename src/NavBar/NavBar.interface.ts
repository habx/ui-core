import * as React from 'react'

import { Except } from '../_internal/types'

export default interface NavBarProps
  extends Except<React.HTMLAttributes<HTMLUListElement>, 'title'> {
  backgroundColor?: string
  title?: string
}

export interface NavBarContextProps {
  isInsideANavBar: boolean
  isExpanded: boolean
}

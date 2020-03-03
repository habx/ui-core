import * as React from 'react'

import { styledAs } from '../_internal/types'

export type spacingType = 'narrow' | 'regular' | 'large'
export default interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLDivElement> {
  itemMaxWidth?: number
  spacing?: spacingType
  as?: styledAs
}

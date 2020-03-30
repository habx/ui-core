import * as React from 'react'

import { styledAs } from '../_internal/types'

export default interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLDivElement> {
  as?: styledAs
  large?: boolean
  small?: boolean
}

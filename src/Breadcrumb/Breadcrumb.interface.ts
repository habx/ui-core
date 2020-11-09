import * as React from 'react'

import { styledAs } from '../_internal/types'

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @ignore
   */
  as?: styledAs

  large?: boolean
  small?: boolean

  /**
   * Should be > 2
   */
  maxItems?: number
}

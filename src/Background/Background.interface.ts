import * as React from 'react'

import { styledAs } from '../_internal/types'

export default interface BackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * background of the element
   */
  backgroundColor: string
  /**
   * opacity of the element
   */
  opacity?: number
  /**
   * if true, it won't use theme background theme
   * @default false
   */
  simulated?: boolean
  /**
   * @ignore
   */
  as?: styledAs
}

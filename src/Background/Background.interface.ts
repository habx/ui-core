import * as React from 'react'

import { styledAs } from '../_internal/types'

export default interface BackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {
  backgroundColor: string
  opacity?: number
  simulated?: boolean
  as?: styledAs
}

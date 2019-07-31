import * as React from 'react'

import { styledAs } from '../_internal/types'

export default interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean
  flat?: boolean
  as?: styledAs
}

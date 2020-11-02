import * as React from 'react'

import { styledAs } from '../_internal/types'

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: string
  colored?: boolean
  as?: styledAs
}

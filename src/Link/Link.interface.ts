import * as React from 'react'

import { styledAs } from '../_internal/types'

export default interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  newTab?: boolean
  as?: styledAs
}

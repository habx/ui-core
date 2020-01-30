import * as React from 'react'

import { styledAs } from '../_internal/types'

export default interface ActionBarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  as?: styledAs
}

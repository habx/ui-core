import * as React from 'react'

import { styledAs, ThemeOverridesProps } from '../_internal/types'

export default interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    ThemeOverridesProps {
  newTab?: boolean
  as?: styledAs
}

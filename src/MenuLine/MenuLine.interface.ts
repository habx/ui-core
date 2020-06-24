import * as React from 'react'

import { styledAs, ThemeOverridesProps } from '../_internal/types'

export default interface MenuLineProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    ThemeOverridesProps {
  as?: styledAs
  elementLeft?: React.ReactNode
  elementRight?: React.ReactNode
  active?: boolean
  disabled?: boolean
}

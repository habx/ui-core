import * as React from 'react'

import { styledAs, ThemeOverridesProps } from '../_internal/types'

export interface MenuLineProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    Pick<ThemeOverridesProps, 'error'> {
  as?: styledAs
  elementLeft?: React.ReactNode
  elementRight?: React.ReactNode
  active?: boolean
  disabled?: boolean
}

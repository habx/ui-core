import * as React from 'react'

import { styledAs, ThemeOverridesProps } from '../_internal/types'

export interface FloatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ThemeOverridesProps {
  elementLeft?: React.ReactNode
  elementRight?: React.ReactNode
  position?: 'bottom' | 'top'
  fixed?: boolean
  disabled?: boolean
  small?: boolean

  /**
   * @ignore
   */
  as?: styledAs
}

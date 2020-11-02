import * as React from 'react'

import { ThemeOverridesProps } from '../_internal/types'

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    ThemeOverridesProps {
  /**
   * Value of the badge, if it is a number, it will be capped by max
   */
  content: React.ReactNode

  /**
   * Max value of the badge
   */
  max?: number
}

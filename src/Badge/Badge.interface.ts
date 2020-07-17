import * as React from 'react'

import { ThemeOverridesProps } from '../_internal/types'

export default interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    ThemeOverridesProps {
  content: React.ReactNode
  max?: number
}

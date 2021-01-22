import * as React from 'react'

import { ThemeOverridesProps } from '../_internal/types'

export interface RoundIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Pick<ThemeOverridesProps, 'error'> {
  icon: string
  large?: boolean
  small?: boolean
}

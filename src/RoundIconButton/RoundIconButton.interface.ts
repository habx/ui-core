import * as React from 'react'

import { ThemeOverridesProps } from '../_internal/types'
import { IconKey } from '../Icon/Icon.interface'

export interface RoundIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Pick<ThemeOverridesProps, 'error'> {
  icon: IconKey
  large?: boolean
  small?: boolean
}

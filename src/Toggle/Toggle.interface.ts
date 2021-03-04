import * as React from 'react'

import { styledAs } from '../_internal/types'
import { WithLabel } from '../withLabel'

export interface ToggleInnerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  checked?: boolean
  value?: boolean
  error?: boolean
  disabled?: boolean
  as?: styledAs
}

export interface ToggleProps extends WithLabel<ToggleInnerProps> {}

import * as React from 'react'

import { styledAs } from '../_internal/types'
import { WithLabel } from '../withLabel'

export interface PhoneInputInnerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  value?: string
  error?: boolean
  small?: boolean
  as?: styledAs
}

export interface PhoneInputProps extends WithLabel<PhoneInputInnerProps> {}

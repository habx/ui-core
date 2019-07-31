import * as React from 'react'

import { Except, styledAs } from '../_internal/types'

export default interface PasswordInputProps
  extends Except<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  value?: string
  error?: boolean
  small?: boolean
  as?: styledAs
}

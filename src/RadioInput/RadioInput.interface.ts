import * as React from 'react'

import { styledAs } from '../_internal/types'
import { WithLabel } from '../withLabel'

export interface RadioInputInnerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  as?: styledAs
  small?: boolean
}

export default interface RadioInputProps
  extends WithLabel<RadioInputInnerProps> {}

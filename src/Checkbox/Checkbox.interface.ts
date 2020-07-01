import * as React from 'react'

import { styledAs } from '../_internal/types'
import WithLabel from '../withLabel/withLabel.interface'

export interface CheckboxInnerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  small?: boolean
  as?: styledAs
}

export default interface CheckboxProps extends WithLabel<CheckboxInnerProps> {}

import * as React from 'react'

import WithLabel from '../withLabel/withLabel.interface'

export interface CheckboxInnerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  small?: boolean
}

export default interface CheckboxProps extends WithLabel<CheckboxInnerProps> {}

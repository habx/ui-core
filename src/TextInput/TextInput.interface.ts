import * as React from 'react'

import { styledAs } from '../_internal/types'
import { WithLabel } from '../withLabel'

export interface TextInputInnerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  small?: boolean
  error?: boolean
  light?: boolean
  as?: styledAs
  elementRight?: React.ReactNode
  elementLeft?: React.ReactNode
  canReset?: boolean
  autocompleteOptions?: string[]
}

export default interface TextInputProps
  extends WithLabel<TextInputInnerProps> {}

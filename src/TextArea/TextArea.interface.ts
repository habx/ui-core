import * as React from 'react'

import { Except, styledAs } from '../_internal/types'

export default interface TextAreaProps
  extends Except<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'> {
  value?: string
  error?: boolean
  small?: boolean
  as?: styledAs
}

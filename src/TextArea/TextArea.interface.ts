import * as React from 'react'

import { styledAs } from '../_internal/types'
import WithLabel from '../withLabel/withLabel.interface'

export interface TextAreaInnerProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'> {
  value?: string
  error?: boolean
  small?: boolean
  as?: styledAs
}

export default interface TextAreaProps extends WithLabel<TextAreaInnerProps> {}

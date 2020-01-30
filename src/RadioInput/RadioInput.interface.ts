import * as React from 'react'

import { styledAs } from '../_internal/types'

export default interface RadioInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  as?: styledAs
}

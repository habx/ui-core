import * as React from 'react'

import { styledAs } from '../_internal/types'

export default interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  as?: styledAs
}

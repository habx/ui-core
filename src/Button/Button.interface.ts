import * as React from 'react'

import { Button, styledAs } from '../_internal/types'

export default interface ButtonProps extends Button {
  elemenftLeft?: React.ReactNode
  elementRight?: React.ReactNode
  outline?: boolean
  link?: boolean
  fullWidth?: boolean
  as?: styledAs
}

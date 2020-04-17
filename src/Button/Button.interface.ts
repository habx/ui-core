import * as React from 'react'

import { Button, styledAs } from '../_internal/types'

export default interface ButtonProps extends Button {
  elementLeft?: React.ReactNode
  elementRight?: React.ReactNode
  outline?: boolean
  link?: boolean
  fullWidth?: boolean
  loading?: boolean
  as?: styledAs
}

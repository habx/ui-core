import * as React from 'react'

import {Button} from '../_internal/types'

export default interface ButtonProps extends Button {
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  showArrow?: boolean
  outline?: boolean
  fullWidth?: boolean
}

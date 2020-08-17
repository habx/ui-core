import * as React from 'react'

import { Button, styledAs } from '../_internal/types'

export default interface ButtonProps extends Button {
  /**
   * Left element of the Button like `<Icon icon="send" />`
   */
  elementLeft?: React.ReactNode
  /**
   * Right element of the Button like `<Icon icon="send" />`
   */
  elementRight?: React.ReactNode
  /**
   * link style activation
   * @default false
   */
  link?: boolean
  /**
   * full width style activation
   * @default false
   */
  fullWidth?: boolean
  /**
   * loading style activation
   * @default false
   */
  loading?: boolean
  /**
   * @ignore
   */
  as?: styledAs
}

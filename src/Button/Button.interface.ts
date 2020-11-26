import * as React from 'react'

import { styledAs, ThemeOverridesProps } from '../_internal/types'

export enum ButtonModes {
  solid,
  outline,
  link,
  ghost,
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Pick<ThemeOverridesProps, 'primary' | 'secondary' | 'error'> {
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
   * outline style activation
   */
  outline?: boolean

  /**
   * disabled style activation
   */
  disabled?: boolean

  /**
   * small style activation
   */
  small?: boolean

  /**
   * large style activation
   */
  large?: boolean

  /**
   * @ignore
   */
  as?: styledAs
}

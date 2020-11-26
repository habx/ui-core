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
  disabled?: boolean

  /**
   * Left element of the Button like `<Icon icon="send" />`
   */
  elementLeft?: React.ReactNode

  /**
   * Right element of the Button like `<Icon icon="send" />`
   */
  elementRight?: React.ReactNode

  /**
   * The Button will take as much width as possible
   * @default false
   */
  fullWidth?: boolean

  /**
   * Blocks interaction and display loading dots on top of your button
   *
   * @default false
   */
  loading?: boolean

  /**
   * Outline design
   *
   * @default false
   */
  outline?: boolean

  /**
   * Link design
   *
   * @default false
   */
  link?: boolean

  /**
   * Ghost design
   *
   * @default false
   */
  ghost?: boolean

  /**
   * Small size
   */
  small?: boolean

  /**
   * @ignore
   */
  as?: styledAs
}

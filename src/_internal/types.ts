import * as React from 'react'

import ThunderUITheme from '../theme/theme.interface'

export type formOption = { value: any; label: string }

export type formValue = formOption | string | number

export type styledTheme = {
  thunderUI: ThunderUITheme
}

export type themeAccessor = (props: {
  theme: styledTheme
  warning?: boolean
  error?: boolean
}) => string

export interface Input<valueType> {
  value?: valueType
  onChange?: (value: valueType, event?: React.ChangeEvent) => void

  error?: boolean
  disabled?: boolean

  color?: string
}

export interface Button extends React.HTMLAttributes<HTMLButtonElement> {
  error?: boolean
  warning?: boolean
  info?: boolean
  disabled?: boolean
  small?: boolean
  large?: boolean

  color?: string
  hoverColor?: string

  type?: string
}

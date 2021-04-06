import * as React from 'react'

import { WithLabel } from '../withLabel'

export interface FakeInputInnerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  canReset?: boolean
  disabled?: boolean
  elementLeft?: React.ReactNode
  elementRight?: React.ReactNode
  error?: boolean
  focused?: boolean
  placeholder?: string
  small?: boolean
  tiny?: boolean
  value?: string
}

export interface FakeInputProps extends WithLabel<FakeInputInnerProps> {}

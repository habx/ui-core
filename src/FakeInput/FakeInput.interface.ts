import * as React from 'react'

import { WithLabel } from '../withLabel'

export interface FakeInputInnerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  small?: boolean
  tiny?: boolean
  elementLeft?: React.ReactNode
  elementRight?: React.ReactNode
  placeholder?: string
  value?: string
  focused?: boolean
  disabled?: boolean
  error?: boolean
}

export interface FakeInputProps extends WithLabel<FakeInputInnerProps> {}

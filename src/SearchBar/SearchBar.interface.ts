import * as React from 'react'

import { TextInputProps } from '../TextInput'

export interface SearchBarProps
  extends Omit<TextInputProps, 'elementLeft' | 'elementRight'> {
  triggerElement?: JSX.Element
  renderPanel?: () => React.ReactNode
}

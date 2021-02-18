import * as React from 'react'

import { TextInputProps } from '../TextInput'
import { TriggerElement } from '../withTriggerElement'

export interface SearchBarProps
  extends Omit<TextInputProps, 'elementLeft' | 'elementRight'> {
  triggerElement?: TriggerElement
  renderPanel?: () => React.ReactNode
}

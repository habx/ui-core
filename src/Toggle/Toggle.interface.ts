import * as React from 'react'

import { styledAs } from '../_internal/types'
import { WithLabel } from '../withLabel'

export interface ToggleInnerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  error?: boolean
  disabled?: boolean
  value?: boolean
  onChange?: (newValue: boolean) => void
  as?: styledAs
}

export interface ToggleProps extends WithLabel<ToggleInnerProps> {}

import * as React from 'react'

import { WithTriggerElement } from '../withTriggerElement'

export interface ModalInnerProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onClose?: (e: React.SyntheticEvent<HTMLElement>) => void
  title?: string
  persistent?: boolean
  animated?: boolean
}

export default interface ModalProps
  extends WithTriggerElement<ModalInnerProps> {}

import * as React from 'react'

import { WithTriggerElement } from '../withTriggerElement'

export interface ModalInnerProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onClose?: (e: Event) => void
  title?: string
  persistent?: boolean
  animated?: boolean
  alwaysRenderChildren?: boolean
}

export default interface ModalProps
  extends WithTriggerElement<ModalInnerProps, HTMLDivElement> {}

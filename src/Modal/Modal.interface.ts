import * as React from 'react'

import { WithTriggerElement } from '../withTriggerElement'

export interface ModalInnerProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onClose?: () => void
  title?: string
  persistent?: boolean
  animated?: boolean
  alwaysRenderChildren?: boolean
  width?: 'small' | 'regular' | 'large'
}

export default interface ModalProps
  extends WithTriggerElement<ModalInnerProps, HTMLDivElement> {}

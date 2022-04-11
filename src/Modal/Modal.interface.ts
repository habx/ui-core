import { Modal } from '@delangle/use-modal'
import * as React from 'react'

import { WithFloatingPanelBehavior } from '../withFloatingPanelBehavior'
import { WithTriggerElement } from '../withTriggerElement'

export interface ModalInnerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'children'> {
  modal: Modal
  parentFloatingPanelRef: React.RefObject<HTMLElement> | null
  title?: React.ReactNode
  width?: 'small' | 'regular' | 'large'
  hideCloseIcon?: boolean
  children?:
    | React.ReactNode
    | ((modal: Modal<HTMLDivElement>) => React.ReactNode)
}

export interface ModalProps
  extends WithTriggerElement<
    WithFloatingPanelBehavior<ModalInnerProps>,
    HTMLDivElement
  > {}

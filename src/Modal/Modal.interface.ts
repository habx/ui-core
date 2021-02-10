import { Modal } from '@delangle/use-modal'
import * as React from 'react'

import { WithFloatingPanelBehavior } from '../withFloatingPanelBehavior'
import { WithTriggerElement } from '../withTriggerElement'

export interface ModalInnerProps extends React.HTMLAttributes<HTMLDivElement> {
  modal: Modal
  parentFloatingPanelRef: React.RefObject<HTMLElement> | null
  title?: string
  width?: 'small' | 'regular' | 'large'
  children?:
    | React.ReactNode
    | ((modal: Modal<HTMLDivElement>) => React.ReactNode)
}

export interface ModalProps
  extends WithTriggerElement<
    WithFloatingPanelBehavior<ModalInnerProps>,
    HTMLDivElement
  > {}

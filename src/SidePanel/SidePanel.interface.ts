import { Modal } from '@delangle/use-modal'
import * as React from 'react'

import { WithFloatingPanelBehavior } from '../withFloatingPanelBehavior'
import { WithTriggerElement } from '../withTriggerElement'

export interface SidePanelInnerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'children'> {
  modal: Modal
  parentFloatingPanelRef: React.RefObject<HTMLElement> | null
  title?: React.ReactNode
  hideCloseIcon?: boolean
  children?:
    | React.ReactNode
    | ((modal: Modal<HTMLDivElement>) => React.ReactNode)
}

export interface SidePanelProps
  extends WithTriggerElement<
    WithFloatingPanelBehavior<SidePanelInnerProps>,
    HTMLDivElement
  > {}

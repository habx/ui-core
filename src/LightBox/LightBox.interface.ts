import { Modal } from '@delangle/use-modal'
import * as React from 'react'

import { LayoutProps } from '../Layout'
import { WithFloatingPanelBehavior } from '../withFloatingPanelBehavior'
import { WithTriggerElement } from '../withTriggerElement'

export type LightBoxSpacing =
  | 'none'
  | 'narrow'
  | 'regular'
  | 'regular-horizontal-only'
  | 'narrow-horizontal-only'

export interface LightBoxInnerProps extends LayoutProps {
  modal: Modal
  parentFloatingPanelRef: React.RefObject<HTMLElement> | null
  hideCloseIcon?: boolean
  spacing?: LightBoxSpacing

  children?:
    | React.ReactNode
    | ((modal: Modal<HTMLDivElement>) => React.ReactNode)
}

export interface LightBoxProps
  extends WithTriggerElement<
    Omit<WithFloatingPanelBehavior<LightBoxInnerProps>, 'persistent'>,
    HTMLDivElement
  > {}

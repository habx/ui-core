import { Modal } from '@delangle/use-modal'
import * as React from 'react'

import { LayoutProps } from '../Layout'
import { WithTriggerElement } from '../withTriggerElement'

export type LightBoxSpacing =
  | 'none'
  | 'narrow'
  | 'regular'
  | 'regular-horizontal-only'
  | 'narrow-horizontal-only'

export interface LightBoxInnerProps extends LayoutProps {
  open?: boolean
  onClose?: () => void
  persistent?: boolean
  animated?: boolean
  hideCloseIcon?: boolean
  spacing?: LightBoxSpacing
  value?: any
  children?:
    | React.ReactNode
    | ((modal: Modal<HTMLDivElement>) => React.ReactNode)
}

export interface LightBoxProps
  extends WithTriggerElement<LightBoxInnerProps, HTMLDivElement> {}

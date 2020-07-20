import { Modal } from '@delangle/use-modal'
import * as React from 'react'

import { LayoutProps } from '../Layout'
import { WithTriggerElement } from '../withTriggerElement'

export interface LightBoxInnerProps extends LayoutProps {
  open?: boolean
  onClose?: () => void
  persistent?: boolean
  animated?: boolean
  children?:
    | React.ReactNode
    | ((modal: Modal<HTMLDivElement>) => React.ReactNode)
}

export default interface LightBoxProps
  extends WithTriggerElement<LightBoxInnerProps, HTMLDivElement> {}

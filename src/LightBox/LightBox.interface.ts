import { Modal } from '@delangle/use-modal'
import * as React from 'react'

import { WithTriggerElement } from '../withTriggerElement'

export interface LightBoxInnerProps
  extends React.HTMLAttributes<HTMLDivElement> {
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

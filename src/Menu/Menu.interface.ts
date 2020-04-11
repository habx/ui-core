import { Modal } from '@delangle/use-modal'
import * as React from 'react'

import { WithTriggerElement } from '../withTriggerElement'

export interface MenuInstance {
  open: boolean
  onClose: () => void
}

export interface MenuInnerProps
  extends React.HTMLAttributes<HTMLUListElement>,
    MenuInstance {
  fullScreenOnMobile?: boolean
  position?: 'horizontal' | 'vertical'
  triggerRef?: React.RefObject<HTMLElement>
  children?:
    | React.ReactNode
    | ((modal: Modal<HTMLUListElement>) => React.ReactNode)
}

export default interface MenuProps
  extends WithTriggerElement<MenuInnerProps, HTMLUListElement> {}

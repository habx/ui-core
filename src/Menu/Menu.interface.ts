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
  scrollable?: boolean
  position?: 'horizontal' | 'vertical'
  triggerRef?: React.RefObject<HTMLElement>
  withOverlay?: boolean
  setPosition?: (dimensions: {
    triggerDimensions: DOMRect
    menuHeight: number
    menuWidth: number
  }) => { top?: number; left?: number; right?: number; bottom?: number }
  children?:
    | React.ReactNode
    | ((modal: Modal<HTMLUListElement>) => React.ReactNode)
}

export interface MenuProps
  extends WithTriggerElement<MenuInnerProps, HTMLUListElement> {}

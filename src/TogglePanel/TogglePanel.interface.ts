import { Modal as ModalType } from '@delangle/use-modal'
import * as React from 'react'

import { WithTriggerElement } from '../withTriggerElement'

export type TogglePanelStyleSetter = (
  dimensions: Dimensions,
  triggerDimensions: Dimensions
) => React.CSSProperties

export interface InnerTogglePanelProps
  extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'children'> {
  children?:
    | React.ReactNode
    | ((modal: ModalType<HTMLDivElement>) => React.ReactNode)
  fullScreenOnMobile?: boolean
  onClose: () => void
  onOpen?: () => void
  open: boolean
  /** This method must be static or memoized. */
  setStyle?: TogglePanelStyleSetter
  triggerRef?: React.RefObject<HTMLElement | null>
  withOverlay?: boolean
  simulated?: boolean
}

export type TogglePanelProps = WithTriggerElement<
  InnerTogglePanelProps,
  HTMLDivElement
>

export interface Dimensions {
  bottom: number
  height: number
  left: number
  right: number
  top: number
  width: number
}

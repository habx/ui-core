import * as React from 'react'

import { MenuProps } from '../Menu'

export interface ConfirmMenuProps
  extends Omit<
    MenuProps,
    | 'onClose'
    | 'open'
    | 'triggerRef'
    | 'triggerElement'
    | 'position'
    | 'scrollable'
  > {
  /**
   * Use labels instead of icons
   * @default false
   */
  textual?: boolean
  onConfirm?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactElement<any>
  triggerRef?: React.RefObject<HTMLElement>
  position?: 'right' | 'left'

  /**
   * Name of the props used to forward the ref  to the element of the DOM we want to use for position
   * @default 'ref'
   */
  childrenRefPropName?: string
}

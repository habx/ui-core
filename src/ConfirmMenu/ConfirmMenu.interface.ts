import * as React from 'react'

import MenuProps from '../Menu/Menu.interface'

interface ConfirmMenuProps
  extends Omit<
    MenuProps,
    'onClose' | 'open' | 'triggerRef' | 'triggerElement' | 'position'
  > {
  onConfirm?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactElement<any>
  triggerRef?: React.RefObject<HTMLElement>
  textual?: boolean
  position?: 'right' | 'left'
}

export default ConfirmMenuProps

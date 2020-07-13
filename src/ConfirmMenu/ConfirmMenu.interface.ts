import * as React from 'react'

interface ConfirmMenuProps {
  triggerRef: React.RefObject<HTMLElement>
  hide?: boolean
  onConfirm?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default ConfirmMenuProps

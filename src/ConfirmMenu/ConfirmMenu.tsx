import * as React from 'react'

import IconButton from '../IconButton'

import ConfirmMenuProps from './ConfirmMenu.interface'
import { ConfirmMenuContent, Menu } from './Menu.style'

const ConfirmMenu: React.FunctionComponent<ConfirmMenuProps> = ({
  children,
  triggerRef,
  hide,
  onClose = () => {},
  onConfirm = () => {},
}) => {
  return (
    <React.Fragment>
      {children}
      <Menu
        open={!hide}
        withOverlay={false}
        onClose={() => {}}
        triggerRef={triggerRef}
        position="horizontal"
      >
        <ConfirmMenuContent>
          <IconButton icon="close" tiny onClick={onClose} />
          <IconButton icon="check" tiny onClick={onConfirm} />
        </ConfirmMenuContent>
      </Menu>
    </React.Fragment>
  )
}

export default ConfirmMenu

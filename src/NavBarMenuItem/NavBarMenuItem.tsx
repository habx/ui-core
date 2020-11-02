import { Modal, ModalState } from '@delangle/use-modal'
import * as React from 'react'

import { Menu } from '../Menu'
import { NavBarContext } from '../NavBar/NavBar.context'
import { NavBarItem } from '../NavBarItem'

import { NavBarMenuItemProps } from './NavBarMenuItem.interface'
import { NavBarMenuItemContainer } from './NavBarMenuItem.style'

const Content: React.FunctionComponent<{ modal: Modal<HTMLUListElement> }> = ({
  modal,
  children,
}) => {
  const { setPersistent } = React.useContext(NavBarContext)

  const isOpened = modal.state !== ModalState.closed

  React.useEffect(() => {
    setPersistent(isOpened)
  }, [isOpened, setPersistent])

  return <React.Fragment>{children}</React.Fragment>
}

export const NavBarMenuItem = React.forwardRef<
  HTMLUListElement,
  NavBarMenuItemProps
>(({ children, bottom, ...props }, ref) => (
  <NavBarMenuItemContainer data-bottom={bottom}>
    <Menu
      position="horizontal"
      ref={ref}
      triggerElement={<NavBarItem {...props} />}
    >
      {(modal) => <Content modal={modal}>{children}</Content>}
    </Menu>
  </NavBarMenuItemContainer>
))

import * as React from 'react'

import Menu from '../Menu'
import NavBarItem from '../NavBarItem'

import NavBarMenuItemProps from './NavBarMenuItem.interface'
import { NavBarMenuItemContainer } from './NavBarMenuItem.style'

const NavBarMenuItem = React.forwardRef<HTMLUListElement, NavBarMenuItemProps>(
  ({ children, bottom, ...props }, ref) => {
    return (
      <NavBarMenuItemContainer data-bottom={bottom}>
        <Menu
          ref={ref}
          triggerElement={<NavBarItem {...props} />}
          position="right-top"
        >
          {children}
        </Menu>
      </NavBarMenuItemContainer>
    )
  }
)

export default NavBarMenuItem

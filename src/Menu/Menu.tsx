import * as React from 'react'

import withTriggerElement from '../withTriggerElement'

import MenuProps from './Menu.interface'
import { MenuContainer } from './Menu.style'

const Menu: React.FunctionComponent<MenuProps> = ({
  children,
  open,
  ...props
}) => {
  return (
    <MenuContainer {...props} data-open={open}>
      {children}
    </MenuContainer>
  )
}

export default withTriggerElement(Menu)

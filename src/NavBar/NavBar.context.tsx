import * as React from 'react'

import { NavBarContextProps } from './NavBar.interface'

const DEFAULT_CONTEXT = {
  isInsideANavBar: false,
  isExpanded: false,
  isPersistent: false,
  setPersistent: () => {},
  color: '#fff',
}

const NavBarContext = React.createContext<NavBarContextProps>(DEFAULT_CONTEXT)

export default NavBarContext

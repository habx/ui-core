import * as React from 'react'

import { NavBarContextProps } from './NavBar.interface'

const DEFAULT_CONTEXT = {
  isInsideANavBar: false,
}

const NavBarContext = React.createContext<NavBarContextProps>(DEFAULT_CONTEXT)

export default NavBarContext

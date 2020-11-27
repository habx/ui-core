import * as React from 'react'

import { NavBarContextValue } from './NavBar.interface'

const DEFAULT_CONTEXT = {
  isInsideANavBar: false,
  isExpanded: false,
  isPersistent: false,
  setPersistent: () => {},
  color: '#FFFFFF',
}

export const NavBarContext = React.createContext<NavBarContextValue>(
  DEFAULT_CONTEXT
)

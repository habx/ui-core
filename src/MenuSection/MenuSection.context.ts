import * as React from 'react'

import { MenuSectionContextProps } from './MenuSection.interface'

const MenuSectionContext = React.createContext<MenuSectionContextProps>({
  depth: 0,
})

export default MenuSectionContext

import * as React from 'react'

import { LayoutContextValue } from './Layout.interface'

export const LayoutContext = React.createContext<LayoutContextValue>({
  isInLayout: false,
  registerChild: () => {},
})

export const useParentLayout = () => React.useContext(LayoutContext)

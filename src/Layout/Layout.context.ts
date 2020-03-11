import * as React from 'react'

import { LayoutContextValue } from './Layout.interface'

const LayoutContext = React.createContext<LayoutContextValue>({
  isInLayout: false,
  registerChild: () => {},
})

export default LayoutContext

export const useParentLayout = () => React.useContext(LayoutContext)

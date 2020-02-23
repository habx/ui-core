import * as React from 'react'

interface LayoutContextValue {
  isInLayout: boolean
  registerActionBar: () => void
}

const LayoutContext = React.createContext<LayoutContextValue>({
  isInLayout: false,
  registerActionBar: () => {},
})

export default LayoutContext

export const useParentLayout = () => React.useContext(LayoutContext)

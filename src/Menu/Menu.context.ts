import * as React from 'react'

const MenuContext = React.createContext<{ close: () => void }>({
  close: () => {},
})

export default MenuContext

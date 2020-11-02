import * as React from 'react'

export const MenuContext = React.createContext<{ close: () => void }>({
  close: () => {},
})

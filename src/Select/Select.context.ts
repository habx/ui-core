import * as React from 'react'

import { SelectContextValue } from './Select.interface'

export const SelectContext = React.createContext<SelectContextValue>({
  multi: false,
  canSelectAll: false,
})

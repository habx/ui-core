import * as React from 'react'

import { ExpansionPanelContextType } from './ExpansionPanel.interface'

const DEFAULT_CONTEXT = {
  isInsideAnExpansionPanel: false,
  multiOpen: false,
  light: false,
  openedItems: [],
  setOpenedItems: () => [],
}

export const ExpansionPanelContext = React.createContext<
  ExpansionPanelContextType
>(DEFAULT_CONTEXT as ExpansionPanelContextType)

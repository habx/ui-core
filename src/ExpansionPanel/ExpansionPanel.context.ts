import * as React from 'react'

import { ExpansionPanelContextType } from './ExpansionPanel.interface'

const DEFAULT_CONTEXT = {
  isInsideAnExpansionPanel: false,
  multiOpen: false,
  light: false,
  openedItems: [],
  setOpenedItems: () => [],
  size: 'regular',
  expandIconPosition: 'left',
}

export const ExpansionPanelContext = React.createContext<
  ExpansionPanelContextType
>(DEFAULT_CONTEXT as ExpansionPanelContextType)

import * as React from 'react'

export default interface ExpansionPanel
  extends React.HTMLAttributes<HTMLDivElement> {
  multiOpen?: boolean
  disabled?: boolean
  light?: boolean
}

export type ExpansionPanelContextType = {
  isInsideAnExpansionPanel: boolean
  openedItems: number[]
  setOpenedItems: (newOpenedItem: (prev: number[]) => number[]) => void
  multiOpen: boolean
  light: boolean
}

import * as React from 'react'

export interface ExpansionPanelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  multiOpen?: boolean
  disabled?: boolean
  light?: boolean
  large?: boolean
  small?: boolean
  expandIconPosition?: 'left' | 'right'
}

export type ExpansionPanelContextType = {
  isInsideAnExpansionPanel: boolean
  openedItems: number[]
  setOpenedItems: (newOpenedItem: (prev: number[]) => number[]) => void
  multiOpen: boolean
  light: boolean
  size: 'large' | 'regular' | 'small'

  /**
   * @default left
   */
  expandIconPosition: 'left' | 'right'
}

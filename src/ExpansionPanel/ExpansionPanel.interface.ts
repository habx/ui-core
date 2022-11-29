import * as React from 'react'

export interface ExpansionPanelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  expandIconPosition?: 'left' | 'right'
  large?: boolean
  light?: boolean
  multiOpen?: boolean
  small?: boolean
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

import * as React from 'react'

export interface ItemComponentProps {
  value: any
  index: number
  editing: boolean
}

export default interface ItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  index: number
  open: boolean
  item: any
  disabled?: boolean
  canBeReordered?: boolean
  renderItem: (itemProps: ItemComponentProps) => JSX.Element
  renderItemTitle: (itemProps: ItemComponentProps) => JSX.Element
  onReorder?: (oldPosition: number, newPosition: number) => void
  onDelete: (position: number) => void
}

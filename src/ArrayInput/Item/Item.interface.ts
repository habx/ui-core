import * as React from 'react'

export interface ArrayInputItemComponentProps {
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
  renderItem: (itemProps: ArrayInputItemComponentProps) => React.ReactNode
  renderItemTitle: (itemProps: ArrayInputItemComponentProps) => React.ReactNode
  onReorder?: (oldPosition: number, newPosition: number) => void
  onDelete: (position: number) => void
}

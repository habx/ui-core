import * as React from 'react'

export interface ArrayInputItemComponentProps<Value = any> {
  value: Value
  index: number
  editing: boolean
}

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number
  open: boolean
  item: any
  disabled?: boolean
  renderItem: (itemProps: ArrayInputItemComponentProps) => React.ReactNode
  renderItemTitle: (itemProps: ArrayInputItemComponentProps) => React.ReactNode

  /*
   * Reordering behavior
   */
  onReorder?: (oldPosition: number, newPosition: number) => void
  canBeReordered: boolean

  /*
   * Deletion behavior
   */
  onDelete?: (position: number) => void
  canBeDeleted: boolean
  deleteIconTooltip?: string
}

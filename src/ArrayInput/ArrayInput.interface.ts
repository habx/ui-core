import * as React from 'react'

import { ItemComponentProps } from './Item/Item.interface'

export interface AddButtonComponentProps {
  onAppend: (value?: any) => void
  disabled?: boolean
}

export default interface ArrayInputProps
  extends React.HTMLAttributes<HTMLDivElement> {
  items?: any[]
  addButtonLabel?: string
  addButtonComponent?: React.ComponentType<AddButtonComponentProps>
  canBeReordered?: boolean
  disabled?: boolean
  onDelete?: (position: number) => void
  onReorder?: (oldPosition: number, newPosition: number) => void
  onAppend?: (value?: any) => void
  itemComponent?: React.ComponentType<ItemComponentProps>
  itemTitleComponent?: React.ComponentType<ItemComponentProps>
  renderItem?: (itemProps: ItemComponentProps) => JSX.Element
  renderItemTitle?: (itemProps: ItemComponentProps) => JSX.Element
}

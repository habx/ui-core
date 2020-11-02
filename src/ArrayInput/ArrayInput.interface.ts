import * as React from 'react'

import { ThemeOverridesProps } from '../_internal/types'
import { WithLabel } from '../withLabel'

import { ArrayInputItemComponentProps } from './Item/Item.interface'

export interface AddButtonComponentProps {
  onAppend: (value?: any) => void
  disabled?: boolean
}

export interface ArrayInputInnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ThemeOverridesProps {
  items?: any[]
  addButtonLabel?: string
  addButtonComponent?: React.ComponentType<AddButtonComponentProps>
  canBeReordered?: boolean
  disabled?: boolean
  onDelete?: (position: number) => void
  onReorder?: (oldPosition: number, newPosition: number) => void
  onAppend?: (value?: any) => void
  onToggle?(index: number): void
  openedItemIndex?: number
  itemComponent?: React.ComponentType<ArrayInputItemComponentProps>
  itemTitleComponent?: React.ComponentType<ArrayInputItemComponentProps>
  renderItem?: (itemProps: ArrayInputItemComponentProps) => React.ReactNode
  renderItemTitle?: (itemProps: ArrayInputItemComponentProps) => React.ReactNode
}

export interface ArrayInputProps extends WithLabel<ArrayInputInnerProps> {}

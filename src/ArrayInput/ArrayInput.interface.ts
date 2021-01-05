import * as React from 'react'

import { ThemeOverridesProps } from '../_internal/types'
import { WithLabel } from '../withLabel'

import { ArrayInputItemComponentProps } from './Item/Item.interface'

export interface ArrayInputAddButtonComponentProps {
  onAppend: (value?: any) => void
  disabled?: boolean
}

export interface ArrayInputInnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ThemeOverridesProps {
  items?: any[]
  addButtonLabel?: string
  addButtonComponent?: React.ComponentType<ArrayInputAddButtonComponentProps>
  disabled?: boolean
  onAppend?: (value?: any) => void
  onToggle?(index: number): void
  openedItemIndex?: number

  /*
   * Reordering behavior
   */
  onReorder?: (oldPosition: number, newPosition: number) => void
  canBeReordered?: boolean

  /*
   * Deletion behavior
   */
  onDelete?: (position: number) => void
  canItemBeDeleted?: ((item: any) => boolean) | boolean
  getDeleteItemIconTooltip?: (
    item: any,
    itemStatus: { canBeDeleted: boolean }
  ) => string | undefined

  /*
   * Item rendering
   */
  itemComponent?: React.ComponentType<ArrayInputItemComponentProps>
  itemTitleComponent?: React.ComponentType<ArrayInputItemComponentProps>
  renderItem?: (itemProps: ArrayInputItemComponentProps) => React.ReactNode
  renderItemTitle?: (itemProps: ArrayInputItemComponentProps) => React.ReactNode
}

export interface ArrayInputProps extends WithLabel<ArrayInputInnerProps> {}

import * as React from 'react'

import { ThemeOverridesProps } from '../_internal/types'
import WithLabel from '../withLabel/withLabel.interface'

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
  itemComponent?: React.ComponentType<ArrayInputItemComponentProps>
  itemTitleComponent?: React.ComponentType<ArrayInputItemComponentProps>
  renderItem?: (itemProps: ArrayInputItemComponentProps) => JSX.Element
  renderItemTitle?: (itemProps: ArrayInputItemComponentProps) => JSX.Element
}

export default interface ArrayInputProps
  extends WithLabel<ArrayInputInnerProps> {}

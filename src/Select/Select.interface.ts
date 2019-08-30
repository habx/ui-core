import * as React from 'react'

import { formValue } from '../_internal/types'

export default interface SelectProps
  extends Omit<
    React.InputHTMLAttributes<HTMLSelectElement>,
    'onChange' | 'value'
  > {
  options: any[]
  description?: string
  placeholderClassName?: string
  icon?: React.ReactNode
  valueFormat?: 'full' | 'simple'

  annotation?: string
  canReset?: boolean
  filterable?: boolean
  compact?: boolean
  multi?: boolean
  canSelectAll?: boolean
  selectAllLabel?: string

  optionDisabled?: (option: any) => boolean
  onChange?: (value: formValue | formValue[] | null) => void
  value?: formValue | formValue[]
}

export interface SelectState {
  isOpened: boolean
  query: string
  focusedItem: any
  wrapperRect: ClientRect
}

export enum ActionType {
  UpdateQuery = 'UPDATE_QUERY',
  ToggleVisibility = 'TOGGLE_VISIBILITY',
  RemoveFocusItem = 'REMOVE_FOCUS_ITEM',
  AddFocusItem = 'ADD_FOCUS_ITEM',
  Resize = 'RESIZE',
}

export type SelectAction =
  | { type: ActionType.ToggleVisibility }
  | { type: ActionType.RemoveFocusItem }
  | { type: ActionType.Resize }
  | { type: ActionType.UpdateQuery; value: string }
  | { type: ActionType.AddFocusItem; value: any }

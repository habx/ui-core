import * as React from 'react'

import { Color } from '../color'
import { WithLabel } from '../withLabel'

export interface SelectContextValue {
  multi: boolean
  canSelectAll: boolean
}

export type SelectOption = {
  label: React.ReactNode
  value: any
  disabled?: boolean
  color?: Color
  keywords?: string[]
  description?: React.ReactNode
  group?: string
}

export type EnrichedSelectOption = SelectOption & { selected: boolean }

export interface SelectInnerProps
  extends Omit<
    React.InputHTMLAttributes<HTMLDivElement>,
    'onChange' | 'value'
  > {
  // Visual
  small?: boolean
  tiny?: boolean
  /**
   * @deprecated use bare instead
   */
  light?: boolean
  bare?: boolean
  round?: boolean

  // Value positioning
  /** @default left **/
  valuePosition?: 'center' | 'left' | 'right'

  elementRight?: React.ReactNode
  elementLeft?: React.ReactNode
  selectAllLabel?: string

  // Behavior
  canSelectAll?: boolean
  canReset?: boolean
  filterable?: boolean
  openOnHover?: boolean

  // Data
  options: SelectOption[]
  multi?: boolean
  onChange?: (value: any | any[]) => void
  value?: any | any[]
}

export interface SelectProps extends WithLabel<SelectInnerProps> {}

export interface SelectState {
  isOpened: boolean
  isFocused: boolean
  query: string
  focusedOption: any
  showResetIcon: boolean
}

export enum ActionType {
  UpdateQuery = 'UPDATE_QUERY',
  Open = 'OPEN',
  Focus = 'FOCUS',
  Close = 'CLOSE',
  SetFocusedOption = 'SET_FOCUSED_OPTION',
  SetShowResetIcon = 'SET_SHOW_RESET_ICON',
}

export type SelectAction =
  | { type: ActionType.Open }
  | { type: ActionType.Close }
  | { type: ActionType.Focus }
  | { type: ActionType.UpdateQuery; value: string }
  | { type: ActionType.SetFocusedOption; value: any }
  | { type: ActionType.SetShowResetIcon; value: boolean }

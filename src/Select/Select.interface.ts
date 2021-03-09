import * as React from 'react'

import { WithLabel } from '../withLabel'

export interface SelectContextValue {
  multi: boolean
  canSelectAll: boolean
}

export type SelectOption = {
  label: React.ReactNode
  value: any
  disabled?: boolean
  color?: string
  keywords?: string[]
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
  light?: boolean
  bare?: boolean

  elementRight?: React.ReactNode
  elementLeft?: React.ReactNode
  selectAllLabel?: string

  // Behavior
  canSelectAll?: boolean
  canReset?: boolean
  filterable?: boolean

  // Data
  options: SelectOption[]
  multi?: boolean
  onChange?: (value: any | any[]) => void
  value?: any | any[]
}

export interface SelectProps extends WithLabel<SelectInnerProps> {}

export interface SelectState {
  isOpened: boolean
  query: string
  focusedOption: any
  showResetIcon: boolean
}

export enum ActionType {
  UpdateQuery = 'UPDATE_QUERY',
  Open = 'OPEN',
  Close = 'CLOSE',
  SetFocusedOption = 'SET_FOCUSED_OPTION',
  SetShowResetIcon = 'SET_SHOW_RESET_ICON',
}

export type SelectAction =
  | { type: ActionType.Open }
  | { type: ActionType.Close }
  | { type: ActionType.UpdateQuery; value: string }
  | { type: ActionType.SetFocusedOption; value: any }
  | { type: ActionType.SetShowResetIcon; value: boolean }

import * as React from 'react'

import { Except } from '../_internal/types'

export interface NavBarProps
  extends Except<React.HTMLAttributes<HTMLUListElement>, 'title'> {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  backgroundColor: string
}

export interface NavBarContextValue {
  isInsideANavBar: boolean
  isExpanded: boolean
  isPersistent: boolean
  setPersistent: (isPersistent: boolean) => void
}

export interface NavBarState {
  isExpanded: boolean
  isPersistent: boolean
  isHovering: boolean
  isHoveringTitleIcon: boolean
}

export enum ActionType {
  SetExpanded = 0,
  SetClosed = 1,
  ToggleOpen = 2,
  SetHover = 3,
  SetHoverTitleIcon = 4,
  SetPersistent = 5,
}

export type NavBarAction =
  | { type: ActionType.SetExpanded; isPersistent: boolean }
  | { type: ActionType.SetClosed }
  | { type: ActionType.ToggleOpen; isPersistent: boolean }
  | { type: ActionType.SetHover; value: boolean }
  | { type: ActionType.SetHoverTitleIcon; value: boolean }
  | { type: ActionType.SetPersistent; value: boolean }

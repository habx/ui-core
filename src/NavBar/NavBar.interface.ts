import * as React from 'react'

import { Except } from '../_internal/types'

export default interface NavBarProps
  extends Except<React.HTMLAttributes<HTMLUListElement>, 'title'> {
  title?: React.ReactNode
  color?: string
  backgroundColor?: string
}

export interface NavBarContextProps {
  isInsideANavBar: boolean
  isExpanded: boolean
  color: string
}

export interface NavBarState {
  isOpened: boolean
  isPersistent: boolean
  isHovering: boolean
  isHoveringTitleIcon: boolean
}

export enum ActionType {
  SetOpen = 0,
  SetClose = 1,
  ToggleOpen = 2,
  SetHover = 3,
  SetHoverTitleIcon = 4,
}

export type NavBarAction =
  | { type: ActionType.SetOpen; isPersistent: boolean }
  | { type: ActionType.SetClose }
  | { type: ActionType.ToggleOpen; isPersistent: boolean }
  | { type: ActionType.SetHover; value: boolean }
  | { type: ActionType.SetHoverTitleIcon; value: boolean }

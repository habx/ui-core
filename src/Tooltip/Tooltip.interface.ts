import * as React from 'react'

export default interface TooltipProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  small?: boolean
  disabled?: boolean
  children: React.ReactElement<any>
}

export type Position = {
  top: number
  left: number
}

export interface TooltipState {
  isVisible: boolean
  position: Position
}

export enum ActionTypes {
  SetIsVisible = 0,
  UpdatePosition = 1,
}

export type TooltipActions =
  | { type: ActionTypes.SetIsVisible; value: boolean }
  | { type: ActionTypes.UpdatePosition }

export type UseTooltipResult = [
  TooltipState,
  { onMouseEnter: () => void; onMouseLeave: () => void },
  {
    trigger: React.RefObject<HTMLDivElement>
    tooltip: React.RefObject<HTMLDivElement>
  }
]

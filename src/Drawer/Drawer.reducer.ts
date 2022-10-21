import * as React from 'react'

import { DrawerStep } from './Drawer.interface'

export type DrawerReducerState = {
  drawerStep: DrawerStep
  dragStarted: boolean
  position: number | null
}

export enum DrawerActionTypes {
  StartDrag,
  EndDrag,
  Drag,
  ChangeStep,
}

export type DrawerActions =
  | {
      type: DrawerActionTypes.StartDrag
    }
  | {
      type: DrawerActionTypes.EndDrag
      containerHeight: number
    }
  | {
      type: DrawerActionTypes.Drag
      value: number
    }
  | {
      type: DrawerActionTypes.ChangeStep
      value: DrawerStep
      containerHeight: number
    }

export const getStepHeights = (
  containerHeight: number
): Record<DrawerStep, number> => ({
  [DrawerStep.closed]: 32,
  [DrawerStep.slight]: 70,
  [DrawerStep.middle]: 360,
  [DrawerStep.full]: containerHeight,
  [DrawerStep.transitioning]: NaN,
})

export const reducer: React.Reducer<DrawerReducerState, DrawerActions> = (
  state,
  action
) => {
  switch (action.type) {
    case DrawerActionTypes.StartDrag:
      return {
        ...state,
        dragStarted: true,
        drawerStep: DrawerStep.transitioning,
      }
    case DrawerActionTypes.EndDrag:
      const drawerSteps = getStepHeights(action.containerHeight)
      const stepEntries = Object.entries(drawerSteps)
      const currentPos = action.containerHeight - (state.position ?? 0)
      const closestStep = stepEntries.reduce((prev, curr) =>
        Math.abs(curr[1] - currentPos) < Math.abs(prev[1] - currentPos)
          ? curr
          : prev
      )

      return {
        ...state,
        drawerStep: closestStep[0] as DrawerStep,
        position:
          closestStep[1] > action.containerHeight
            ? 0
            : action.containerHeight - closestStep[1],
        dragStarted: false,
      }
    case DrawerActionTypes.Drag:
      return {
        ...state,
        position: action.value - 24,
      }
    case DrawerActionTypes.ChangeStep:
      let position =
        action.containerHeight -
        getStepHeights(action?.containerHeight)[action.value]
      if (
        action.containerHeight <
        getStepHeights(action?.containerHeight)[action.value]
      ) {
        position = 0
      }
      return {
        ...state,
        drawerStep: action.value,
        position,
      }
  }
}

import * as React from 'react'

import { clamp } from '../_internal/data'
import { useSSRLayoutEffect } from '../_internal/ssr'
import useMergedRef from '../_internal/useMergedRef'
import buildUseOnlyOpenedInstanceHook from '../_internal/useOnlyOpenedInstance'

import TooltipProps, {
  ActionTypes,
  Position,
  TooltipActions,
  TooltipState,
  TooltipVisibilityState,
  UseTooltipResult,
} from './Tooltip.interface'

const INITIAL_STATE: TooltipState = {
  position: { top: 0, left: 0 },
  visibilityState: TooltipVisibilityState.NotInstantiated,
}

const VERTICAL_TRIGGER_MARGIN = 12
const VERTICAL_SMALL_TRIGGER_MARGIN = 8
const HORIZONTAL_SCREEN_MARGIN = 4
const VERTICAL_SCREEN_MARGIN = 4

export const useTooltip = (
  props: TooltipProps,
  ref: React.Ref<HTMLDivElement>,
  customTriggerRef?: React.RefObject<HTMLElement>
): UseTooltipResult => {
  const tooltipRef = useMergedRef<HTMLDivElement>(ref)
  const localTriggerRef = React.useRef<HTMLElement>(null)

  const triggerRef = customTriggerRef ?? localTriggerRef

  const getPosition = (): Position => {
    const tooltipDimensions = tooltipRef.current?.getBoundingClientRect()
    const triggerDimensions = triggerRef.current?.getBoundingClientRect()

    if (!tooltipDimensions || !triggerDimensions) {
      return { top: 0, left: 0 }
    }

    const left = clamp(
      triggerDimensions.left +
        (triggerDimensions.width - tooltipDimensions.width) / 2,
      HORIZONTAL_SCREEN_MARGIN,
      window.innerWidth - tooltipDimensions.width - HORIZONTAL_SCREEN_MARGIN
    )

    let top =
      triggerDimensions.top -
      tooltipDimensions.height -
      (props.small ? VERTICAL_SMALL_TRIGGER_MARGIN : VERTICAL_TRIGGER_MARGIN)

    if (top < VERTICAL_SCREEN_MARGIN) {
      top = triggerDimensions.bottom + VERTICAL_TRIGGER_MARGIN
    }

    return { top, left }
  }

  const reducer: React.Reducer<TooltipState, TooltipActions> = (
    state,
    action
  ) => {
    switch (action.type) {
      case ActionTypes.SetVisibilityState: {
        return {
          ...state,
          visibilityState: action.value,
          ...(action.value === TooltipVisibilityState.Visible
            ? { position: getPosition() }
            : {}),
        }
      }

      case ActionTypes.UpdatePosition: {
        return {
          ...state,
          position: getPosition(),
        }
      }
    }
  }

  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)
  const visibilityStateRef = React.useRef(state.visibilityState)
  visibilityStateRef.current = state.visibilityState

  const handleMouseEnter = React.useCallback(() => {
    if (!props.disabled) {
      dispatch({
        type: ActionTypes.SetVisibilityState,
        value:
          visibilityStateRef.current === TooltipVisibilityState.NotInstantiated
            ? TooltipVisibilityState.HiddenWaitingToBeVisible
            : TooltipVisibilityState.Visible,
      })
    }
  }, [props.disabled])

  const handleMouseLeave = React.useCallback(
    () =>
      dispatch({
        type: ActionTypes.SetVisibilityState,
        value: TooltipVisibilityState.HiddenHasBeenVisible,
      }),
    []
  )

  useSSRLayoutEffect(() => {
    if (props.disabled) {
      dispatch({
        type: ActionTypes.SetVisibilityState,
        value: TooltipVisibilityState.NotInstantiated,
      })
    }
  }, [props.disabled])

  useSSRLayoutEffect(() => {
    dispatch({ type: ActionTypes.UpdatePosition })
  }, [props.description, props.title, props.small])

  React.useEffect(() => {
    if (
      state.visibilityState === TooltipVisibilityState.HiddenWaitingToBeVisible
    ) {
      dispatch({
        type: ActionTypes.SetVisibilityState,
        value: TooltipVisibilityState.Visible,
      })
    }
  }, [state.visibilityState])

  return [
    state,
    {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
    { trigger: triggerRef, tooltip: tooltipRef },
  ]
}

export const useOnlyOneTooltipOpened = buildUseOnlyOpenedInstanceHook()

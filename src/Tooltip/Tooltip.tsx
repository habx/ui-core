import useModal from '@delangle/use-modal'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { clamp } from '../_internal/data'
import { isClientSide, useSSRLayoutEffect } from '../_internal/ssr'
import useMergedRef from '../_internal/useMergedRef'
import palette from '../palette'
import Text from '../Text'

import TooltipProps, {
  ActionTypes,
  Position,
  TooltipActions,
  TooltipState,
  TooltipVisibilityState,
  UseTooltipResult,
} from './Tooltip.interface'
import { ANIMATION_DURATION, TooltipContainer } from './Tooltip.style'

const INITIAL_STATE: TooltipState = {
  position: { top: 0, left: 0 },
  visibilityState: TooltipVisibilityState.NotInstantiated,
}

const VERTICAL_TRIGGER_MARGIN = 12
const VERTICAL_SMALL_TRIGGER_MARGIN = 8
const HORIZONTAL_SCREEN_MARGIN = 4
const VERTICAL_SCREEN_MARGIN = 4

const useTooltip = (
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

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (props, ref) => {
    const {
      title,
      description,
      children,
      small = false,
      onClick,
      triggerRef,
      ...rest
    } = props

    const [state, actions, refs] = useTooltip(props, ref, triggerRef)

    const modal = useModal<HTMLDivElement>({
      open: state.visibilityState === TooltipVisibilityState.Visible,
      onClose: () => {},
      persistent: true,
      animated: true,
      animationDuration: ANIMATION_DURATION,
    })

    const content = React.isValidElement(children)
      ? React.cloneElement(children, {
          ref: refs.trigger,
          onMouseEnter: actions.onMouseEnter,
          onMouseLeave: actions.onMouseLeave,
          ...(onClick ? { onClick } : {}),
        })
      : children

    React.useEffect(() => {
      if (triggerRef) {
        const node = triggerRef.current
        if (node) {
          node.addEventListener('mouseover', actions.onMouseEnter)
          node.addEventListener('mouseout', actions.onMouseLeave)

          return () => {
            node.removeEventListener('mouseover', actions.onMouseEnter)
            node.removeEventListener('mouseout', actions.onMouseLeave)
          }
        }
      }
    }, [actions.onMouseEnter, actions.onMouseLeave, triggerRef])

    return (
      <React.Fragment>
        {content}
        {isClientSide &&
          state.visibilityState !== TooltipVisibilityState.NotInstantiated &&
          ReactDOM.createPortal(
            <TooltipContainer
              ref={refs.tooltip}
              backgroundColor={palette.darkBlue[700]}
              data-has-description={!!description}
              data-state={modal.state}
              style={state.position}
              {...rest}
            >
              <Text opacity={1} type={small ? 'caption' : 'regular'}>
                {title}
              </Text>
              {description && (
                <Text type={small ? 'caption' : 'regular'}>{description}</Text>
              )}
            </TooltipContainer>,
            document.body
          )}
      </React.Fragment>
    )
  }
)

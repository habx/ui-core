import useModal from '@delangle/use-modal'
import * as React from 'react'
import { createPortal } from 'react-dom'

import { clamp } from '../_internal/data'
import { isClientSide, useSSRLayoutEffect } from '../_internal/ssr'
import useMergedRef from '../_internal/useMergedRef'
import palette from '../palette'
import Text from '../Text'

import TooltipProps, {
  TooltipState,
  ActionTypes,
  TooltipActions,
  Position,
  UseTooltipResult,
} from './Tooltip.interface'
import {
  ANIMATION_DURATION,
  TooltipContainer,
  TooltipTriggerContainer,
} from './Tooltip.style'

const INITIAL_STATE: TooltipState = {
  position: { top: 0, left: 0 },
  isVisible: false,
}

const VERTICAL_TRIGGER_MARGIN = 12
const HORIZONTAL_SCREEN_MARGIN = 4
const VERTICAL_SCREEN_MARGIN = 4

const useTooltip = (
  props: TooltipProps,
  ref: React.Ref<HTMLDivElement>
): UseTooltipResult => {
  const tooltipRef = useMergedRef<HTMLDivElement>(ref)
  const triggerRef = React.useRef<HTMLDivElement>(null)

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
      triggerDimensions.top - tooltipDimensions.height - VERTICAL_TRIGGER_MARGIN

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
      case ActionTypes.SetIsVisible: {
        return {
          ...state,
          isVisible: action.value,
          ...(action.value ? { position: getPosition() } : {}),
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

  const handleMouseEnter = React.useCallback(() => {
    if (!props.disabled) {
      dispatch({ type: ActionTypes.SetIsVisible, value: true })
    }
  }, [props.disabled])
  const handleMouseLeave = React.useCallback(
    () => dispatch({ type: ActionTypes.SetIsVisible, value: false }),
    []
  )

  useSSRLayoutEffect(() => {
    if (props.disabled) {
      dispatch({ type: ActionTypes.SetIsVisible, value: false })
    }
  }, [props.disabled])

  useSSRLayoutEffect(() => {
    dispatch({ type: ActionTypes.UpdatePosition })
  }, [props.description, props.title, props.small])

  return [
    state,
    {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
    { trigger: triggerRef, tooltip: tooltipRef },
  ]
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  const { title, description, children, small = false, ...rest } = props

  const [state, actions, refs] = useTooltip(props, ref)

  const modal = useModal<HTMLDivElement>({
    open: state.isVisible,
    onClose: () => {},
    persistent: true,
    animated: true,
    animationDuration: ANIMATION_DURATION,
  })

  return (
    <React.Fragment>
      <TooltipTriggerContainer
        className="test"
        onMouseEnter={actions.onMouseEnter}
        onMouseLeave={actions.onMouseLeave}
        ref={refs.trigger}
      >
        {children}
      </TooltipTriggerContainer>
      {isClientSide &&
        createPortal(
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
})

export default Tooltip

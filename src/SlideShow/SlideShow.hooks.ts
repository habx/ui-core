import * as React from 'react'

import { isNil, throttle } from '../_internal/data'
import { useSSRLayoutEffect } from '../_internal/ssr'

import SlideShowProps, {
  ActionType,
  SlideChangeSource,
  SlideShowAction,
  SlideShowState,
} from './SlideShow.interface'
import { DESKTOP_ANIMATION_DURATION } from './SlideShow.style'
import {
  getClosestSlidePosition,
  getRelativePosition,
  getSwipeDelta,
  isElementInViewport,
} from './SlideShow.utils'

const INITIAL_STATE: SlideShowState = {
  isSwiping: false,
  currentSlide: 0,
  previousSlide: 1,
  lastSlideChangeSource: SlideChangeSource.initial,
  swipePosition: {
    x: 0,
    y: 0,
  },
}

export const useSlideShow = ({
  items,
  onCurrentSlideChange,
  registerActions,
  circular,
  currentSlide,
  ref,
}: Pick<
  SlideShowProps,
  'onCurrentSlideChange' | 'registerActions' | 'circular' | 'currentSlide'
> & { items: any[]; ref: React.RefObject<HTMLDivElement> }) => {
  const slideAmount = items.length

  const reducer: React.Reducer<SlideShowState, SlideShowAction> = (
    state,
    action
  ) => {
    switch (action.type) {
      case ActionType.GoToSlide: {
        const getTarget = (): number => {
          if (action.isRelative) {
            return state.currentSlide + action.value
          }

          return getClosestSlidePosition({
            slideAmount,
            slideIndex: action.value,
            currentSlide: state.currentSlide,
          })
        }

        const target = getTarget()

        if (circular || (target >= 0 && target < slideAmount)) {
          return {
            ...state,
            previousSlide: state.currentSlide,
            lastSlideChangeSource: action.source,
            currentSlide: target,
          }
        }

        return state
      }

      case ActionType.SwipeEnd: {
        const delta = getSwipeDelta(state.swipePosition)

        const newState = {
          ...state,
          isSwiping: false,
          swipePosition: { x: 0, y: 0 },
        }

        const target = state.currentSlide + delta
        if (
          delta !== 0 &&
          (circular || (target >= 0 && target < slideAmount))
        ) {
          return {
            ...newState,
            previousSlide: state.currentSlide,
            lastSlideChangeSource: SlideChangeSource.swipe,
            currentSlide: target,
          }
        }

        return newState
      }

      case ActionType.SwipeMove: {
        const { swipePosition: currentPosition } = state
        const isStartingSwipe =
          currentPosition.x === 0 && currentPosition.y === 0

        if (isStartingSwipe) {
          if (Math.abs(action.value.y) < Math.abs(action.value.x)) {
            action.event.preventDefault()
            return { ...state, isSwiping: true, swipePosition: action.value }
          }
        } else if (state.isSwiping) {
          action.event.preventDefault()
        }

        return { ...state, swipePosition: action.value }
      }

      default:
        throw new Error('Unknown action')
    }
  }

  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)

  const throttledKeyboardGoTo = React.useCallback(
    throttle<(delta: 1 | -1) => void>((delta) => {
      return dispatch({
        type: ActionType.GoToSlide,
        value: delta,
        isRelative: true,
        source: SlideChangeSource.keyboard,
      })
    }, DESKTOP_ANIMATION_DURATION),
    []
  )

  const handleNextClick = () =>
    dispatch({
      type: ActionType.GoToSlide,
      value: 1,
      isRelative: true,
      source: SlideChangeSource.navigationButton,
    })

  const handlePreviousClick = () =>
    dispatch({
      type: ActionType.GoToSlide,
      value: -1,
      isRelative: true,
      source: SlideChangeSource.navigationButton,
    })

  const handleSwipeEnd = () => dispatch({ type: ActionType.SwipeEnd })

  const handleSwipeMove = (
    swipePosition: { x: number; y: number },
    event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) =>
    dispatch({
      type: ActionType.SwipeMove,
      value: swipePosition,
      event,
    })

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        ['ArrowLeft', 'ArrowRight'].includes(e.code) &&
        ref.current &&
        isElementInViewport(ref.current)
      ) {
        throttledKeyboardGoTo(e.code === 'ArrowLeft' ? -1 : 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [ref, throttledKeyboardGoTo])

  React.useEffect(() => {
    if (registerActions) {
      registerActions({
        goToSlide: (newSlide) => {
          dispatch({
            type: ActionType.GoToSlide,
            value: newSlide,
            isRelative: false,
            source: SlideChangeSource.parentCall,
          })
        },
      })
    }
  }, [registerActions])

  useSSRLayoutEffect(() => {
    if (onCurrentSlideChange && state.lastSlideChangeSource !== 'parentCall') {
      const slide = getRelativePosition({
        currentSlide: state.currentSlide,
        slideAmount,
      })

      onCurrentSlideChange(slide, {
        source: state.lastSlideChangeSource,
      })
    }
  }, [state.currentSlide, onCurrentSlideChange])

  useSSRLayoutEffect(() => {
    if (!isNil(currentSlide)) {
      dispatch({
        type: ActionType.GoToSlide,
        source: SlideChangeSource.parentCall,
        value: currentSlide as number,
      })
    }
  }, [currentSlide]) // eslint-disable-line react-hooks/exhaustive-deps

  return {
    ...state,
    slideAmount,
    handleNextClick,
    handlePreviousClick,
    handleSwipeEnd,
    handleSwipeMove,
  }
}

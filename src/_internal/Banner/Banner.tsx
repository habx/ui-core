import * as React from 'react'

import { ANIMATION_DURATIONS } from '../../animations'
import useMergedRef from '../useMergedRef'

import BannerProps from './Banner.interface'
import { BannerContainer } from './Banner.style'

interface BannerState {
  step: 'opened' | 'closed' | 'closing'
  marginTop: number
}

enum ActionTypes {
  SetStepOpened = 0,
  SetStepClosing = 1,
  SetStepClosed = 2,
}

type BannerActions =
  | { type: ActionTypes.SetStepOpened }
  | { type: ActionTypes.SetStepClosing }
  | { type: ActionTypes.SetStepClosed }

const Banner = React.forwardRef<HTMLDivElement, BannerProps>((props, ref) => {
  const { children, open, backgroundColor = '#FFFFFF', ...rest } = props

  const containerRef = useMergedRef<HTMLDivElement>(ref)

  const reducer: React.Reducer<BannerState, BannerActions> = (
    state,
    action
  ) => {
    switch (action.type) {
      case ActionTypes.SetStepOpened: {
        return {
          ...state,
          step: 'opened',
        }
      }

      case ActionTypes.SetStepClosing: {
        return {
          ...state,
          step: 'closing',
          marginTop: -(containerRef.current?.offsetHeight ?? 0),
        }
      }

      case ActionTypes.SetStepClosed: {
        return {
          ...state,
          step: 'closed',
          marginTop: 0,
        }
      }

      default: {
        return state
      }
    }
  }

  const INITIAL_STATE: BannerState = {
    step: open ? 'opened' : 'closed',
    marginTop: 0,
  }

  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)

  React.useEffect(() => {
    if (open === true) {
      dispatch({ type: ActionTypes.SetStepOpened })
    } else if (open === false) {
      dispatch({ type: ActionTypes.SetStepClosing })

      const timeout = setTimeout(() => {
        dispatch({ type: ActionTypes.SetStepClosed })
      }, [ANIMATION_DURATIONS.m])

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [open])

  if (state.step === 'closed') {
    return null
  }

  return (
    <BannerContainer
      backgroundColor={backgroundColor}
      ref={containerRef}
      {...rest}
      style={{
        marginTop: state.marginTop,
      }}
    >
      {children}
    </BannerContainer>
  )
})

export default Banner

import * as React from 'react'

import useMergedRef from '../_internal/useMergedRef'
import { ANIMATION_DURATIONS } from '../animations/animations'
import IconButton from '../IconButton'
import Text from '../Text'

import AnnouncementBannerProps from './AnnouncementBanner.interface'
import {
  AnnouncementBannerCenteredContent,
  AnnouncementBannerContent,
  DesktopButton,
  MobileButton,
} from './AnnouncementBanner.style'

interface AnnouncementBannerState {
  step: 'opened' | 'closed' | 'closing'
  marginTop: number
}

enum ActionTypes {
  SetStepOpened = 0,
  SetStepClosing = 1,
  SetStepClosed = 2,
}

type AnnouncementBannerActions =
  | { type: ActionTypes.SetStepOpened }
  | { type: ActionTypes.SetStepClosing }
  | { type: ActionTypes.SetStepClosed }

const AnnouncementBanner = React.forwardRef<
  HTMLDivElement,
  AnnouncementBannerProps
>((props, ref) => {
  const { onValidate, onClose, open, message, validationLabel, ...rest } = props

  const containerRef = useMergedRef<HTMLDivElement>(ref)

  const reducer: React.Reducer<
    AnnouncementBannerState,
    AnnouncementBannerActions
  > = (state, action) => {
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

  const INITIAL_STATE: AnnouncementBannerState = {
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
    <AnnouncementBannerContent
      ref={containerRef}
      {...rest}
      style={{
        marginTop: state.marginTop,
      }}
    >
      <AnnouncementBannerCenteredContent>
        <Text opacity={1}>{message}</Text>
        &nbsp; &nbsp; &nbsp;
        <DesktopButton onClick={onValidate}>{validationLabel}</DesktopButton>
        <MobileButton onClick={onValidate} link>
          {validationLabel}
        </MobileButton>
      </AnnouncementBannerCenteredContent>
      <IconButton icon="close" onClick={onClose} large />
    </AnnouncementBannerContent>
  )
})

export default AnnouncementBanner

import * as React from 'react'

import useMergedRef from '../_internal/useMergedRef'
import { ANIMATION_DURATIONS } from '../animations/animations'
import IconButton from '../IconButton'
import palette from '../palette'
import Text from '../Text'
import Triangle from '../Triangle'

import AnnouncementBannerProps from './AnnouncementBanner.interface'
import {
  AnnouncementBannerCenteredContent,
  AnnouncementBannerShapeContainer,
  AnnouncementBannerContent,
  DesktopButton,
  MobileButton,
  DesktopCloseIconContainer,
  MobileCloseIconButton,
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
      <AnnouncementBannerShapeContainer>
        <Triangle
          origin={{ top: 0, left: 0 }}
          width={240}
          height={240}
          color={palette.yellow[600]}
        />
        <Triangle
          origin={{ bottom: 0, left: 0 }}
          width={60}
          height={60}
          color={palette.blue[600]}
        />
        <Triangle
          origin={{ bottom: 0, right: -60 }}
          width={320}
          height={320}
          color={palette.yellow[600]}
        />
        <Triangle
          origin={{ top: 0, right: 0 }}
          width={120}
          height={120}
          color={palette.orange[500]}
        />
        <Triangle
          origin={{ bottom: 0, right: 0 }}
          width={60}
          height={60}
          color={palette.darkBlue[900]}
        />
      </AnnouncementBannerShapeContainer>
      <AnnouncementBannerCenteredContent>
        <Text opacity={1}>{message}</Text>
        &nbsp; &nbsp; &nbsp;
        <DesktopButton onClick={onValidate} small>
          {validationLabel}
        </DesktopButton>
        <MobileButton onClick={onValidate} link>
          {validationLabel}
        </MobileButton>
      </AnnouncementBannerCenteredContent>
      <DesktopCloseIconContainer
        backgroundColor={palette.darkBlue[900]}
        simulated
      >
        <IconButton icon="close" onClick={onClose} large />
      </DesktopCloseIconContainer>
      <MobileCloseIconButton>
        <IconButton icon="close" onClick={onClose} large />
      </MobileCloseIconButton>
    </AnnouncementBannerContent>
  )
})

export default AnnouncementBanner

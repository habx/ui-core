import styled, { keyframes } from 'styled-components'

import zIndex from '../_internal/zIndex'
import { ANIMATION_DURATIONS } from '../animations/animations'
import Background from '../Background'
import IconButton from '../IconButton'

export const FADE_IN = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const LightBoxOverlay = styled(Background)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.modals};

  &[data-state='opening'] {
    animation: ${FADE_IN} ${ANIMATION_DURATIONS.l}ms linear 0ms;
  }

  &[data-state='closing'] {
    animation: ${FADE_IN} ${ANIMATION_DURATIONS.l}ms linear 0ms reverse;
    opacity: 0;
    pointer-events: none;
  }

  &[data-state='closed'] {
    opacity: 0;
    pointer-events: none;
  }
`

export const CloseIcon = styled(IconButton)`
  position: absolute;
  top: 12px;
  right: 24px;
  z-index: 2;
`

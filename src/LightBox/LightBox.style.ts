import styled, { keyframes } from 'styled-components'

import zIndex from '../_internal/zIndex'
import { ANIMATION_DURATIONS } from '../animations'
import IconButton from '../IconButton'
import Layout from '../Layout'

export const FADE_IN = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const LightBoxContainer = styled(Layout)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.modals};
  display: flex;
  flex-direction: column;

  --layout-left-padding: 0;
  --layout-right-padding: 0;
  --layout-top-padding: 0;
  --layout-bottom-padding: 0;

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
  z-index: 13;
`

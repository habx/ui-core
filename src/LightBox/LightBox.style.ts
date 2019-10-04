import styled, { keyframes } from 'styled-components'

import Background from '../Background'
import breakpoints from '../breakpoints'
import theme from '../theme'

export const ANIMATION_DURATION = 300

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
  z-index: 99999;

  &[data-state='opening'] {
    animation: ${FADE_IN} ${ANIMATION_DURATION}ms linear 0ms;
  }

  &[data-state='closing'] {
    animation: ${FADE_IN} ${ANIMATION_DURATION}ms linear 0ms reverse;
    opacity: 0;
    pointer-events: none;
  }

  &[data-state='closed'] {
    opacity: 0;
    pointer-events: none;
  }

  @media (${breakpoints.below.phone}) {
    padding: 24px;
  }
`

export const CloseIconContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 24px;
  font-size: 20px;
  cursor: pointer;
  z-index: 2;
  background-color: ${theme.color('background')};
  border-radius: 50%;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`

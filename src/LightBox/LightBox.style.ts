import styled, { keyframes } from 'styled-components'

import zIndex from '../_internal/zIndex'
import { ANIMATION_DURATIONS } from '../animations'
import Layout from '../Layout'
import theme from '../theme'

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

export const CloseIconButton = styled.button`
  position: absolute;
  top: 18px;
  right: 24px;
  z-index: 13;
  background-color: #fff;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 24px;
  color: ${theme.color('secondary', { opacity: 0.72 })};

  &:hover {
    color: ${theme.color('secondary')};
  }

  &:focus {
    outline: none;
  }
`

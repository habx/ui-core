import styled from 'styled-components'

import { ANIMATION_DURATIONS } from '../animations'
import { ANIMATION_TIMING_FUNCTION } from '../animations/animations'
import { fontScale } from '../fontScale'
import { theme } from '../theme'

export const RoundIconButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${fontScale.moon};
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  box-shadow: inset 0 0 0 var(--round-icon-button-border-width)
      var(--round-icon-button-border-color),
    0 0 0 var(--round-icon-button-outline-width)
      var(--round-icon-button-outline-color);
  color: ${theme.color('secondary', { dynamic: true })};

  transition-property: box-shadow, background-color;
  transition-duration: ${ANIMATION_DURATIONS.m}ms;
  transition-timing-function: ${ANIMATION_TIMING_FUNCTION};

  // Size
  height: var(--round-icon-button-diameter);
  width: var(--round-icon-button-diameter);
  border-radius: 50%;

  --round-icon-button-border-width: 1px;
  --round-icon-button-border-color: ${theme.neutralColor(300)};
  --round-icon-button-outline-width: 0;
  --round-icon-button-outline-color: ${theme.color('primary', {
    opacity: 0.3,
  })};
  --round-icon-button-diameter: 36px;

  &:hover {
    --round-icon-button-border-width: 3px;
  }

  &:active {
    --round-icon-button-border-width: 2px;
  }

  &:focus {
    --round-icon-button-outline-width: 4px;
  }

  &:disabled {
    pointer-events: none;
  }
`

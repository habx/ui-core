import styled from 'styled-components'

import { ANIMATION_DURATIONS } from '../animations'
import { ANIMATION_TIMING_FUNCTION } from '../animations'
import { fontScale } from '../fontScale'
import { theme } from '../theme'

export const RoundIconButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  padding: 0; // needed in safari mobile
  cursor: pointer;
  flex: 0 0 auto;
  box-shadow: inset 0 0 0 var(--round-icon-button-border-width)
      var(--round-icon-button-border-color),
    0 0 0 var(--round-icon-button-outline-width)
      var(--round-icon-button-outline-color);
  color: var(--round-icon-color);
  background-color: var(--round-icon-background-color);

  transition-property: box-shadow, background-color;
  transition-duration: ${ANIMATION_DURATIONS.m}ms;
  transition-timing-function: ${ANIMATION_TIMING_FUNCTION};

  // Size
  height: var(--round-icon-button-diameter);
  width: var(--round-icon-button-diameter);
  border-radius: 50%;
  font-size: ${fontScale.earth.size}px;

  --round-icon-button-border-width: 1px;
  --round-icon-button-border-color: ${theme.neutralColor(300)};
  --round-icon-button-outline-width: 0;
  --round-icon-button-outline-color: ${theme.color('primary', {
    opacity: 0.3,
  })};
  --round-icon-button-diameter: 36px;
  --round-icon-background-color: ${theme.color('background')};
  --round-icon-color: ${theme.color('secondary', {
    dynamic: true,
    opacity: 0.7,
  })};

  &[data-small='true'] {
    --round-icon-button-diameter: 24px;
    font-size: ${fontScale.moon.size}px;
  }

  &[data-large='true'] {
    --round-icon-button-diameter: 48px;
    font-size: ${fontScale.earth.size}px;
  }

  &:hover {
    --round-icon-button-border-width: 3px;
    --round-icon-color: ${theme.color('secondary', { dynamic: true })};
  }

  &:active {
    --round-icon-button-border-width: 2px;
    --round-icon-color: ${theme.color('secondary', { dynamic: true })};
  }

  &:focus {
    --round-icon-button-outline-width: 4px;
  }

  &:disabled {
    pointer-events: none;
    --round-icon-button-border-width: 0;
    --round-icon-background-color: ${theme.neutralColor(300)};
    --round-icon-color: ${theme.neutralColor(300)};
  }
`

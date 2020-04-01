import styled from 'styled-components'

import {
  ANIMATION_DURATIONS,
  ANIMATION_TIMING_FUNCTION,
} from '../animations/animations'
import fontScale from '../fontScale/fontScale'
import palette from '../palette'
import theme from '../theme'

export const IconButtonContainer = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.textColor({ dynamic: true, opacity: 0.72 })};
  transition: all ${ANIMATION_DURATIONS.m}ms ${ANIMATION_TIMING_FUNCTION};

  border-radius: 2px;
  font-size: var(--icon-button-font-size);
  width: var(--icon-button-size);
  height: var(--icon-button-size);
  box-shadow: inset 0 0 0 var(--icon-button-border-width)
    ${theme.textColor({ opacity: 0.2 })};

  --icon-button-font-size: ${fontScale.jupiter.size}px;
  --icon-button-size: ${fontScale.jupiter.lineHeight}px;
  --icon-button-border-width: 0;

  &:focus {
    --icon-button-border-width: 4px;
  }

  &[data-small='true'] {
    --icon-button-font-size: ${fontScale.earth.size}px;
    --icon-button-size: ${fontScale.earth.lineHeight}px;

    &:focus {
      --icon-button-border-width: 2px;
    }
  }

  &[data-large='true'] {
    --icon-button-font-size: ${fontScale.sun.size}px;
    --icon-button-size: ${fontScale.sun.lineHeight}px;

    &:focus {
      --icon-button-border-width: 6px;
    }
  }

  &:disabled {
    pointer-events: none;
    color: ${palette.darkBlue[400]};
  }

  &:hover {
    background-color: ${theme.textColor({ opacity: 0.05 })};
  }

  &:active {
    color: ${theme.textColor({ dynamic: true })};
  }

  &:focus {
    background-color: unset;
  }
`

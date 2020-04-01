import styled from 'styled-components'

import {
  ANIMATION_DURATIONS,
  ANIMATION_TIMING_FUNCTION,
} from '../animations/animations'
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
  color: ${theme.color('secondary', { dynamic: true })};
  transition: all ${ANIMATION_DURATIONS.m}ms ${ANIMATION_TIMING_FUNCTION};

  font-size: var(--icon-button-font-size);
  width: var(--icon-button-size);
  height: var(--icon-button-size);
  box-shadow: inset 0 0 0 var(--button-border-width) ${palette.darkBlue[200]};

  --icon-button-font-size: 24px;
  --icon-button-size: 36px;
  --button-border-width: 0;

  &:focus {
    --button-border-width: 4px;
  }

  &[data-small='true'] {
    --icon-button-font-size: 16px;
    --icon-button-size: 24px;

    &:focus {
      --button-border-width: 2px;
    }
  }

  &[data-large='true'] {
    --icon-button-font-size: 32px;
    --icon-button-size: 48px;

    &:focus {
      --button-border-width: 6px;
    }
  }

  &:disabled {
    pointer-events: none;
    color: ${palette.darkBlue[400]};
  }

  &:hover {
    color: ${theme.color('secondary', { dynamic: true, variation: 'hover' })};
    background-color: ${palette.darkBlue[200]};
  }

  &:focus,
  &:active {
    color: ${theme.color('secondary', { dynamic: true, variation: 'focus' })};
    background-color: unset;
  }
`

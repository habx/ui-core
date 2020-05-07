import styled from 'styled-components'

import {
  ANIMATION_DURATIONS,
  ANIMATION_TIMING_FUNCTION,
} from '../animations/animations'
import fontScale from '../fontScale/fontScale'
import palette from '../palette'
import theme from '../theme'

export const IconButtonContainer = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  position: relative;

  color: ${theme.textColor({ dynamic: true, opacity: 0.72 })};
  background-color: ${theme.color('background')};
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
  --icon-button-background: var(--icon-button-base-background);

  &:hover {
    --icon-button-background: ${theme.textColor({ opacity: 0.05 })};
  }

  &:focus {
    --icon-button-border-width: 6px;
    --icon-button-background: unset;
  }

  &:hover:not(:focus)[data-has-bounding-background='true'] {
    --icon-button-border-width: 3px;
  }

  &[data-tiny='true'] {
    --icon-button-font-size: ${fontScale.mars.size}px;
    --icon-button-size: ${fontScale.mars.lineHeight}px;

    &:focus {
      --icon-button-border-width: 2px;
    }

    &:hover:not(:focus)[data-has-bounding-background='true'] {
      --icon-button-border-width: 1.5px;
    }
  }

  &[data-small='true'] {
    --icon-button-font-size: ${fontScale.earth.size}px;
    --icon-button-size: ${fontScale.earth.lineHeight}px;

    &:focus {
      --icon-button-border-width: 4px;
    }

    &:hover:not(:focus)[data-has-bounding-background='true'] {
      --icon-button-border-width: 2px;
    }
  }

  &[data-large='true'] {
    --icon-button-font-size: ${fontScale.sun.size}px;
    --icon-button-size: ${fontScale.sun.lineHeight}px;

    &:focus {
      --icon-button-border-width: 8px;
    }

    &:hover:not(:focus)[data-has-bounding-background='true'] {
      --icon-button-border-width: 4px;
    }
  }

  &:disabled {
    pointer-events: none;
    color: ${palette.darkBlue[400]};
  }

  &:active {
    color: ${theme.textColor({ dynamic: true })};
  }
`

export const IconButtonContent = styled.div`
  background: var(--icon-button-background);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

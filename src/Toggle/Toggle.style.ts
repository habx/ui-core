import styled from 'styled-components'

import palette from '../palette'
import theme from '../theme'

export const ToggleContainer = styled.div`
  --toggle-circle-radius: 11px;

  width: calc(var(--toggle-circle-radius) * 3.5);
  height: calc(var(--toggle-circle-radius) * 1.5);
  background-color: ${palette.darkBlue[500]};
  transition: all 150ms ease-in-out;
  position: relative;
  cursor: pointer;
  margin: calc(var(--toggle-circle-radius) * 0.5) 0;
  border-radius: calc(var(--toggle-circle-radius) * 0.75);
  outline: none;

  &::before,
  &::after {
    content: '';
    box-sizing: border-box;
    background-color: #fff;
    position: absolute;
    top: calc(0px - var(--toggle-circle-radius) * 0.25);
    left: 0;
    height: calc(2 * var(--toggle-circle-radius));
    width: calc(2 * var(--toggle-circle-radius));
    border-radius: var(--toggle-circle-radius);
    transition: all 150ms ease-in-out;
  }

  &::after {
    box-shadow: ${theme.shadow('lower')};
    border: 1.5px solid ${palette.darkBlue[300]};
  }

  &:hover::after {
    box-shadow: ${theme.shadow('regular')};
    border-width: 3px;
  }

  &:focus::after {
    box-shadow: ${theme.shadow('lower')};
    border-width: 5px;
  }

  &:active::after {
    box-shadow: ${theme.shadow('lower')};
    border-width: 3px;
  }

  &:not([data-selected='true']) {
    &:hover {
      background-color: ${palette.darkBlue[500]};
    }
  }

  &[data-selected='true'] {
    &::before,
    &::after {
      left: calc(100% - var(--toggle-circle-radius) * 2);
    }

    background-color: ${theme.color('primary', { opacity: 0.6 })};

    &::after {
      background-color: ${theme.color('primary')};
      border-width: 0;
    }

    &:hover::after {
      background-color: ${theme.color('primary', { variation: 'hover' })};
    }

    &:focus::after {
      background-color: ${theme.color('primary', { variation: 'focus' })};
    }

    &:active::after {
      background-color: ${theme.color('primary', { variation: 'focus' })};
    }
  }

  &[data-has-background='true']:not([data-selected='true']):not([data-error='true']) {
    background-color: #fff;
  }

  &[data-error='true'] {
    background-color: ${theme.color('warning', { opacity: 0.6 })};

    &::after {
      background-color: ${theme.color('warning')};
      border-color: #fff;
    }

    &:hover::after {
      background-color: ${theme.color('warning', { variation: 'hover' })};
    }

    &:focus::after {
      background-color: ${theme.color('warning', { variation: 'focus' })};
    }

    &:active::after {
      background-color: ${theme.color('warning', { variation: 'focus' })};
    }
  }

  &[data-disabled='true'] {
    pointer-events: none;

    &:not([data-selected='true']) {
      background-color: ${palette.darkBlue[400]};

      &::after {
        background-color: ${palette.darkBlue[400]};
      }
    }

    &[data-selected='true']::after {
      background-color: ${theme.color('primary', { opacity: 0.6 })};

      &::after {
        background-color: ${theme.color('primary', { opacity: 0.6 })};
      }
    }

    &::after {
      border-width: 3px;
      border-color: #fff;
    }
  }
`

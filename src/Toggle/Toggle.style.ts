import styled from 'styled-components'

import { theme } from '../theme'

export const ToggleContainer = styled.div`
  --toggle-circle-radius: 11px;

  width: calc(var(--toggle-circle-radius) * 3.5);
  height: calc(var(--toggle-circle-radius) * 1.5);
  background-color: ${theme.neutralColor(500)};
  transition: all 150ms ease-in-out;
  position: relative;
  cursor: pointer;
  margin: calc(var(--toggle-circle-radius) * 0.5) 0;
  border-radius: calc(var(--toggle-circle-radius) * 0.75);
  outline: none;
  flex: 0 0 auto;

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
    border: 1.5px solid ${theme.neutralColor(300)};
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
      background-color: ${theme.neutralColor(500)};
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
      background-color: ${theme.color('primary', { variation: 'loud' })};
    }

    &:focus::after {
      background-color: ${theme.color('primary', { variation: 'louder' })};
    }

    &:active::after {
      background-color: ${theme.color('primary', { variation: 'louder' })};
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
      background-color: ${theme.color('warning', { variation: 'loud' })};
    }

    &:focus::after {
      background-color: ${theme.color('warning', { variation: 'louder' })};
    }

    &:active::after {
      background-color: ${theme.color('warning', { variation: 'louder' })};
    }
  }

  &[data-disabled='true'] {
    pointer-events: none;

    &:not([data-selected='true']) {
      background-color: ${theme.neutralColor(400)};

      &::after {
        background-color: ${theme.neutralColor(400)};
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

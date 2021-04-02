import styled from 'styled-components'

import { transition } from '../animations'
import { theme } from '../theme'

export const CardButtonContainer = styled.button`
  outline: none;
  border: none;
  border-radius: 6px;
  display: flex;
  text-align: left;
  cursor: pointer;
  color: ${theme.textColor()};
  user-select: none;
  transition: ${transition('background-color', { duration: 's' })};

  --card-button-border-width: 0;
  --card-button-border-color: ${theme.neutralColor(300)};
  --card-button-outline-width: 0;
  --card-button-outline-color: ${theme.color('primary', { opacity: 0.3 })};
  --card-button-shadow: 0 0 0 ${theme.neutralColor(1000)};
  --card-button-background-color: ${theme.color('background')};

  box-shadow: var(--card-button-shadow),
    inset 0 0 0 var(--card-button-border-width) var(--card-button-border-color),
    0 0 0 var(--card-button-outline-width) var(--card-button-outline-color);

  background-color: var(--card-button-background-color);

  &[data-active='true']:not(:focus) {
    --card-button-border-width: 2px;
    --card-button-border-color: ${theme.color('primary')};
  }

  &[data-outline='true']:not(:focus):not(:disabled):not([data-active='true']) {
    --card-button-border-width: 1px;

    &:hover {
      --card-button-border-width: 3px;
    }
  }

  &:not([data-outline='true']):not(:focus):not(:disabled):not([data-active='true']) {
    --card-button-shadow: ${theme.shadow('low')};

    &:hover {
      --card-button-shadow: ${theme.shadow('low', { hover: true })};
    }
  }

  &:focus {
    --card-button-outline-width: 4px;
  }

  &:disabled {
    pointer-events: none;
    filter: grayscale();
    opacity: 0.5;
  }

  padding: 0;

  &[data-spacing='regular'] {
    padding: 24px;
  }

  &[data-spacing='narrow'] {
    padding: 12px;
  }
`

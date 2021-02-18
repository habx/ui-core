import styled from 'styled-components'

import { theme } from '../theme'

export const CardButtonIllustration = styled.img`
  height: 48px;
  margin-bottom: 12px;
`

export const CardButtonContainer = styled.button`
  outline: none;
  border: none;
  padding: 24px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: left;
  cursor: pointer;

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

  &[data-outline='true']:not(:focus):not(:disabled) {
    --card-button-border-width: 1px;

    &:hover {
      --card-button-border-width: 3px;
    }
  }

  &:not([data-outline='true']):not(:focus):not(:disabled) {
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

    & > ${CardButtonIllustration} {
      opacity: 0.3;
    }

    & > *:not(${CardButtonIllustration}) {
      opacity: 0.5;
    }
  }
`

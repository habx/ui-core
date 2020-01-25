import styled from 'styled-components'

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

  font-size: var(--icon-button-size);
  width: var(--icon-button-size);
  height: var(--icon-button-size);

  --icon-button-size: 24px;

  &[data-small='true'] {
    --icon-button-size: 16px;
  }

  &[data-large='true'] {
    --icon-button-size: 32px;
  }

  &:disabled {
    pointer-events: none;
    color: ${palette.darkBlue[400]};
  }

  &:hover {
    color: ${theme.color('secondary', { dynamic: true, variation: 'hover' })};
  }

  &:focus,
  &:active {
    color: ${theme.color('secondary', { dynamic: true, variation: 'focus' })};
  }
`

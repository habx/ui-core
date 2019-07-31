import styled from 'styled-components'

import palette from '../palette'
import theme from '../theme'

export const NavigationButtonContainer = styled.button`
  outline: none;
  user-select: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color('background')};
  border: none;
  border-radius: 50%;
  z-index: 1;
  opacity: 1;
  color: ${theme.color('primary', { dynamic: true })};
  box-shadow: ${theme.shadow('low')};
  transition: all 150ms ease-in-out;

  height: 36px;
  width: 36px;
  font-size: 16px;

  &[data-large='true'] {
    height: 50px;
    width: 50px;
    font-size: 20px;
  }

  &[data-small='true'] {
    height: 24px;
    width: 24px;
    font-size: 12px;
  }

  &:not(:disabled) {
    cursor: pointer;

    &:hover {
      box-shadow: ${theme.shadow('low', { hover: true })};
    }

    &:active {
      box-shadow: ${theme.shadow('lower')};
    }
  }

  &:disabled {
    color: ${palette.darkBlue[400]};

    &[data-background='true'] {
      color: ${theme.color('secondary', { opacity: 0.3, useRootTheme: true })};
    }
  }
`

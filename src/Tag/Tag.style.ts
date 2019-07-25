import styled from 'styled-components'

import palette from '../palette'
import theme from '../theme'

export const TagContainer = styled.button`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  user-select: none;
  vertical-align: middle;
  text-align: left;
  text-decoration: none;
  border-radius: 2px;
  background-color: transparent;
  border: 1.5px solid ${palette.darkBlue[300]};
  font-family: ${theme.font()};
  font-weight: 500;
  line-height: 1;
  transition: background-color 50ms ease-in-out;

  padding: 0 12px;
  height: 28px;
  font-size: 12px;
  color: ${theme.color('secondary', {
    opacity: 0.72,
  })};

  &[data-large='true'] {
    padding: 0 24px;
    height: 48px;
    border-width: 2px;
    font-size: 16px;
  }

  &:not([data-active='true']) {
    &:hover:not(:focus):not(:active) {
      background-color: ${palette.darkBlue[200]};
    }

    &:focus,
    &:active {
      border-color: ${palette.blue[300]};
    }

    &:not([data-large='true']) {
      &:focus {
        border-width: 3px;
        padding: 0 10.5px;
      }
    }

    &[data-large='true'] {
      &:focus,
      &:active {
        border-width: 4px;
        padding: 0 22px;
      }
    }

    &[data-background='true'] {
      border-color: rgba(255, 255, 255, 0.3);
      color: ${theme.color('secondary')};

      &:hover:not(:focus):not(:active) {
        background-color: rgba(255, 255, 255, 0.7);
      }
    }
  }

  &[data-active='true'] {
    border: none;
    color: ${theme.color('primary', { useRootTheme: true })};
    background-color: ${palette.blue[200]};
    padding: 0 13.5px;

    &[data-large='true'] {
      padding: 0 26px;
    }

    &[data-background='true'] {
      background-color: #fff;
    }
  }
`

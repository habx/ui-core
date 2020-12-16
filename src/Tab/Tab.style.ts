import styled from 'styled-components'

import { transition } from '../animations/animations'
import { theme } from '../theme'

export const TabContainer = styled.button`
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
  border: 1.5px solid ${theme.neutralColor(300)};
  font-family: ${theme.font()};
  font-weight: 500;
  line-height: 1;
  transition: ${transition('background-color', { duration: 's' })};

  padding: 0 12px;
  height: 28px;
  font-size: 12px;
  color: ${theme.textColor()};

  &[data-large='true'] {
    padding: 0 24px;
    height: 48px;
    border-width: 2px;
    font-size: 16px;
  }

  &:not([data-active='true']) {
    &:not(:disabled) {
      &:hover,
      &:focus,
      &:active {
        background-color: ${theme.neutralColor(200)};
      }

      &:hover {
        border-color: ${theme.neutralColor(200)};
      }

      &:focus,
      &:active {
        border-color: ${theme.color('primary', { variation: 'calm' })};
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
        border-color: #fff;
        color: #fff;

        &:hover:not(:focus):not(:active) {
          color: ${theme.textColor({ useRootTheme: true })};
          background-color: rgba(255, 255, 255, 0.7);
          border-color: transparent;
        }

        &:focus {
          background-color: transparent;
        }
      }
    }

    &:disabled {
      color: ${theme.neutralColor(300)};

      &[data-background='true'] {
        color: rgba(255, 255, 255, 0.3);
        border-color: rgba(255, 255, 255, 0.3);
      }
    }
  }

  &[data-active='true'] {
    border: none;
    color: ${theme.color('primary', { useRootTheme: true })};
    background-color: ${theme.color('primary', { variation: 'calm' })};
    padding: 0 13.5px;

    &[data-large='true'] {
      padding: 0 26px;
    }

    &[data-background='true'] {
      background-color: #fff;
      color: ${theme.textColor({ useRootTheme: true })};
    }
  }

  &:disabled {
    pointer-events: none;
  }
`

export const SideElementContainer = styled.div`
  font-size: 0.9em;
  display: flex;
  margin-top: 1px;

  &[data-position='left'] {
    margin-right: 6px;
  }

  &[data-position='right'] {
    margin-left: 6px;
  }
`

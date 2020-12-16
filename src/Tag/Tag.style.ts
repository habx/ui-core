import styled from 'styled-components'

import { transition } from '../animations/animations'
import { theme } from '../theme'

export const TagContainer = styled.button`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  user-select: none;
  vertical-align: middle;
  text-align: left;
  text-decoration: none;
  background-color: transparent;
  border: 1px solid ${theme.neutralColor(300)};
  font-family: ${theme.font()};
  line-height: 1;
  transition: ${transition('background-color', { duration: 's' })};
  color: ${theme.textColor()};

  padding: 0 var(--tag-horizontal-padding);
  height: var(--tag-height);
  border-radius: calc(var(--tag-height) / 2);
  font-size: 12px;

  --tag-horizontal-padding: 12px;
  --tag-height: 32px;

  &[data-interactive='true'] {
    cursor: pointer;
  }

  &:not([data-active='true']) {
    &[data-interactive='true'] {
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

      &:focus {
        border-width: 2px;
        padding: 0 calc(var(--tag-horizontal-padding) - 1px);
      }
    }

    &[data-background='true'] {
      color: ${theme.textColor({ useRootTheme: true })};
      background-color: #fff;
      border-color: #fff;

      &[data-interactive='true'] {
        &:hover:not(:focus):not(:active) {
          background-color: rgba(255, 255, 255, 0.7);
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
    padding: 0 calc(var(--tag-horizontal-padding) + 1px);

    &[data-background='true'] {
      background-color: #fff;
    }
  }

  &[data-large='true'] {
    --tag-horizontal-padding: 16px;
    --tag-height: 40px;
    font-size: 16px;
  }

  &[data-small='true'] {
    --tag-horizontal-padding: 8px;
    --tag-height: 24px;
    font-size: 12px;
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

import styled from 'styled-components'

import { transition } from '../animations/animations'
import { theme } from '../theme'

export const NavigationDotsContainer = styled.div<{ width: number }>`
  align-self: center;
  display: flex;

  width: ${({ width }) => width}px;
`

export const Dot = styled.div<{ secondary?: boolean }>`
  display: inline-block;
  margin: 0 2px;
  border-radius: 4px;
  min-width: 8px;
  height: 8px;
  background-color: var(--navigation-dot-empty-color);
  vertical-align: middle;
  transition: ${transition('all', { duration: 'l' })};

  --navigation-dot-empty-color: ${theme.neutralColor(400)};
  --navigation-dot-active-color: ${theme.color('secondary')};

  &[data-active='true'] {
    flex: 0 1 100%;

    &:not([data-disabled='true']) {
      background-color: var(--navigation-dot-active-color);
    }
  }

  &:not([data-active='true']) {
    &[data-interactive='true'] {
      cursor: pointer;

      &:not([data-active='true']):hover {
        min-width: 12px;
      }
    }
  }

  &[data-small='true'] {
    height: 6px;
    min-width: 6px;
    margin-top: 1px;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

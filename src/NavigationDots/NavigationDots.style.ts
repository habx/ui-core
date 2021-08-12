import styled from 'styled-components'

import { transition } from '../animations'
import { theme } from '../theme'

export const NavigationDotsContainer = styled.div<{ width: number }>`
  display: flex;
  align-items: center;

  width: ${({ width }) => width}px;
`

export const Dot = styled.div<{ secondary?: boolean }>`
  display: inline-block;
  margin: 0 3px;
  border-radius: 4px;
  min-width: 8px;
  height: 8px;
  max-width: 16px;
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

      :hover {
        min-width: 12px;
        --navigation-dot-empty-color: ${theme.neutralColor(500)};
        &[data-active='true'] {
          --navigation-dot-empty-color: ${theme.neutralColor(400)};
        }
      }
    }
  }

  &[data-disabled='true'] {
    --navigation-dot-empty-color: ${theme.neutralColor(300)};
    pointer-events: none;
    max-width: 8px;
    &[data-dark-mode='true'] {
      --navigation-dot-empty-color: ${theme.neutralColor(200)};
    }
  }

  &[data-small='true'] {
    height: 4px;
    min-width: 4px;
  }

  &[data-dark-mode='true'] {
    --navigation-dot-empty-color: ${theme.neutralColor(300)};
    &[data-active='true'] {
      --navigation-dot-active-color: ${theme.neutralColor(100)};
    }
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

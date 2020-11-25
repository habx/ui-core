import styled from 'styled-components'

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
  transition: all 300ms ease-in-out;

  --navigation-dot-empty-color: ${theme.neutralColor(400)};
  --navigation-dot-active-color: ${theme.color('primary')};

  &[data-background='true'] {
    --navigation-dot-empty-color: rgba(255, 255, 255, 0.3);
    --navigation-dot-active-color: #fff;
  }

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

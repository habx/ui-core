import styled from 'styled-components'

import { ThemeOverridesProps } from '../_internal/types'
import { transition } from '../animations/animations'
import { theme } from '../theme'

export const MenuLineContainer = styled.li`
  padding: 6px var(--menu-line-horizontal-padding);

  display: flex;
  align-items: center;
  transition: ${transition('all', { duration: 'xs' })};
  white-space: nowrap;

  &:not([data-active='true']) {
    cursor: pointer;

    &:hover {
      background-color: ${theme.neutralColor(200)};
    }
  }

  &[data-active='true'] {
    opacity: 0.72;
  }

  &[data-disabled='true'] {
    pointer-events: none;
    opacity: 0.4;
  }
`

export const SideElementContainer = styled.div<ThemeOverridesProps>`
  font-size: 0.9em;
  display: flex;
  margin-top: 1px;
  color: ${theme.color('secondary', { dynamic: true })};

  &[data-position='left'] {
    margin-right: 8px;
  }

  &[data-position='right'] {
    margin-left: 8px;
  }

  & > svg {
    height: 100%;
  }
`

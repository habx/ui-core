import styled from 'styled-components'

import { ThemeOverridesProps } from '../_internal/types'
import { transition } from '../animations'
import { Text } from '../Text'
import { theme } from '../theme'

export const MenuLineLabel = styled(Text)`
  flex: 1 1 100%;
`

export const MenuLineContainer = styled.li`
  padding: 0 var(--menu-line-horizontal-padding);
  height: 48px;

  display: flex;
  align-items: center;
  transition: ${transition('all', { duration: 'xs' })};
  white-space: nowrap;

  &:not([data-active='true']) {
    cursor: pointer;

    &:hover {
      background-color: ${theme.neutralColor(200)};

      &[data-error='true'] {
        background-color: ${theme.color('error', { variation: 'calmer' })};
      }
    }
  }

  &[data-active='true'] {
    background-color: ${theme.neutralColor(200)};

    & ${MenuLineLabel} {
      font-weight: 500;
    }
  }

  &[data-disabled='true'] {
    pointer-events: none;
    opacity: 0.4;
  }
`

export const SideElementContainer = styled.div<ThemeOverridesProps>`
  display: flex;
  color: ${theme.color('secondary', { dynamic: true })};
  font-size: 24px;
  flex: 0 0 auto;

  &[data-position='left'] {
    margin-right: 12px;
  }

  &[data-position='right'] {
    margin-left: 12px;
    margin-right: -12px;
  }

  & > svg {
    height: 100%;
  }
`

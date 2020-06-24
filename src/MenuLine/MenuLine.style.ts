import styled from 'styled-components'

import palette from '../palette'
import theme from '../theme'

export const MenuLineContainer = styled.li`
  padding: 6px 24px;

  display: flex;
  align-items: center;
  transition: all 150ms ease-in-out;
  white-space: nowrap;

  &:not([data-active='true']) {
    cursor: pointer;

    &:hover {
      background-color: ${palette.darkBlue[200]};
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

export const IconContainer = styled.div<{
  primary?: boolean
  warning?: boolean
}>`
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

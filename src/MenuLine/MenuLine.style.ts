import styled from 'styled-components'

import palette from '../palette'
import theme from '../theme'

export const MenuLineContainer = styled.li`
  padding: 8px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 150ms ease-in-out;

  &:hover {
    background-color: ${palette.darkBlue[200]};
  }
`

export const IconContainer = styled.div<{ primary?: boolean }>`
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

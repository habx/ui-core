import styled, { css } from 'styled-components'

import palette from '../palette'
import theme from '../theme'

export const MenuLineContainer = styled.li<{
  depth: number
}>`
  ${({ depth }) =>
    css`
      padding: ${depth > 0 ? 6 : 8}px ${(depth + 1) * 24}px;
    `};

  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  white-space: nowrap;

  &:hover {
    background-color: ${palette.darkBlue[200]};
  }

  &[data-disabled='true'] {
    pointer-events: none;
    filter: grayscale();
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

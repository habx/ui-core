import styled, { css } from 'styled-components'

import { theme } from '../theme'

export const linkStyle = css<{}>`
  color: ${theme.color('primary', { dynamic: true })};
  font-family: ${theme.font()};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: color 150ms ease-in-out;

  &:hover {
    color: ${theme.color('primary', { dynamic: true, opacity: 0.72 })};
  }
`

export const LinkContainer = styled.a`
  ${linkStyle};
`

import styled, { css } from 'styled-components'

import theme from '../theme'

export const linkStyle = css<{}>`
  color: ${theme.color('primary', { dynamic: true })};
  font-family: ${theme.font()};
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 150ms ease-in-out;

  &:hover {
    opacity: 0.72;
  }
`

export const LinkContainer = styled.a`
  ${linkStyle};
`

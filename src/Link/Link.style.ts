import styled from 'styled-components'

import theme from '../theme'

export const LinkContainer = styled.a`
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

import styled from 'styled-components'

import theme from '../theme'

export const MenuContainer = styled.ul`
  box-shadow: ${theme.shadow()};
  opacity: 1;
  transition: opacity 150ms ease-in-out;
  position: absolute;
  border-radius: 4px;
  margin: 16px 0 0 0;
  padding: 12px 0;
  list-style-type: none;
  min-width: 100%;

  &:not([data-open='true']) {
    opacity: 0;
    pointer-events: none;
  }
`

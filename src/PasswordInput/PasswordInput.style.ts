import styled from 'styled-components'

import { theme } from '../theme'

export const HideButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  color: ${theme.color('primary')};

  &[data-hidden='true'] {
    color: ${theme.color('secondary', { opacity: 0.5 })};
  }
`

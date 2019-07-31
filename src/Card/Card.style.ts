import styled from 'styled-components'

import Background from '../Background'
import theme from '../theme'

export const CardContainer = styled(Background)`
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  transition: all 150ms ease-in-out;

  &:not([data-flat='true']) {
    box-shadow: ${theme.shadow('regular')};
  }

  &[data-animated='true'] {
    &:hover {
      cursor: pointer;
      transform: translateY(-4px);

      &:not([data-flat='true']) {
        box-shadow: ${theme.shadow('regular', { hover: true })};
      }
    }
  }
`

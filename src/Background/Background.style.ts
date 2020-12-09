import styled from 'styled-components'

import { theme } from '../theme'

export const BackgroundContainer = styled.div`
  &:not([data-simulated='true']) {
    background-color: ${theme.color('background')};
  }
`

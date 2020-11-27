import styled from 'styled-components'

import { theme } from '../theme'

export const BackgroundContainer = styled.div<{
  opacity: number
  backgroundColor: string
}>`
  &:not([data-simulated='true']) {
    background-color: ${theme.color('primary', {
      valuePropName: 'backgroundColor',
    })};
  }
`

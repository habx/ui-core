import styled from 'styled-components'

import theme from '../theme'

export const BackgroundContainer = styled.div<{
  opacity: number
  backgroundColor: string
}>`
  background-color: ${theme.color('primary', { propName: 'backgroundColor' })};
`

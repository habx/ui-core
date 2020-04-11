import styled from 'styled-components'

import breakpoints from '../../breakpoints'
import theme from '../../theme'
import Option from '../Option'

export const MAX_HEIGHT = 300

export const OptionsContent = styled.div`
  @media (${breakpoints.above.phone}) {
    overflow-y: auto;
    overflow-x: hidden;
    max-height: ${MAX_HEIGHT}px;
  }
`

export const SelectAllOption = styled(Option)`
  border-bottom: solid 1px ${theme.color('background')};
  font-weight: 600;
`

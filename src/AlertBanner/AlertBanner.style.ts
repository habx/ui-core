import styled from 'styled-components'

import breakpoints from '../breakpoints'
import Text from '../Text'

export const AlertBannerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 100%;
  z-index: 1;
  padding: 12px 24px;

  @media (${breakpoints.below.smallTablet}) {
    padding: 12px 20px;
  }
`

export const AlertBannerText = styled(Text)`
  width: 100%;
  text-align: center;
`

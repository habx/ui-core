import styled from 'styled-components'

import breakpoints from '../breakpoints'

export const AlertBannerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 100%;
  z-index: 1;
  padding: 12px 24px;

  @media (${breakpoints.below.smallTablet}) {
    display: block;
    padding: 12px 20px;
  }
`

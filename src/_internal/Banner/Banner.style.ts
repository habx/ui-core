import styled from 'styled-components'

import { transition } from '../../animations/animations'
import { Background } from '../../Background'
import { breakpoints } from '../../breakpoints'

export const BannerContainer = styled(Background)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: ${transition('margin-top')};
  overflow: hidden;
  position: relative;

  @media (${breakpoints.below.smallTablet}) {
    align-items: flex-start;
  }
`

import styled from 'styled-components'

import { ANIMATION_DURATIONS } from '../../animations'
import { Background } from '../../Background'
import { breakpoints } from '../../breakpoints'

export const BannerContainer = styled(Background)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: margin-top ${ANIMATION_DURATIONS.m}ms ease-in-out;
  overflow: hidden;
  position: relative;

  @media (${breakpoints.below.smallTablet}) {
    align-items: flex-start;
  }
`

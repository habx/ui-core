import styled from 'styled-components'

import { ANIMATION_DURATIONS } from '../animations/animations'
import breakpoints from '../breakpoints'
import Button from '../Button'

export const AnnouncementBannerContent = styled.div`
  padding: 6px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: margin-top ${ANIMATION_DURATIONS.m}ms ease-in-out;
  overflow: hidden;

  @media (${breakpoints.below.smallTablet}) {
    padding: 18px 20px;
    align-items: flex-start;
  }
`

export const AnnouncementBannerCenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 100%;

  @media (${breakpoints.below.smallTablet}) {
    display: block;

    & > * {
      display: inline;
    }

    & > button {
      margin-top: -2px;
    }
  }
`

export const DesktopButton = styled(Button)`
  @media (${breakpoints.below.smallTablet}) {
    display: none;
  }
`

export const MobileButton = styled(Button)`
  @media (${breakpoints.above.smallTablet}) {
    display: none;
  }
`

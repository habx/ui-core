import styled from 'styled-components'

import Background from '../Background'
import breakpoints from '../breakpoints'
import Button from '../Button'

export const AnnouncementBannerShadowBar = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0px -2px 8px rgba(6, 26, 60, 0.1);
  pointer-events: none;
`

export const AnnouncementBannerShapeContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  @media (${breakpoints.below.tablet}) {
    display: none;
  }
`

export const AnnouncementBannerCenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 100%;
  z-index: 1;
  padding: 19px 24px;

  @media (${breakpoints.below.smallTablet}) {
    display: block;
    padding: 18px 20px;

    & > * {
      display: inline;
    }

    & > button {
      margin-top: -2px;
    }
  }
`

export const DesktopCloseIconContainer = styled(Background)`
  margin-right: 24px;

  @media (${breakpoints.below.tablet}) {
    display: none;
  }
`

export const MobileCloseIconButton = styled.div`
  margin: 18px 20px;

  @media (${breakpoints.above.tablet}) {
    display: none;
  }
`

export const DesktopButton = styled(Button)`
  margin-left: 18px;

  @media (${breakpoints.below.smallTablet}) {
    display: none;
  }
`

export const MobileButton = styled(Button)`
  @media (${breakpoints.above.smallTablet}) {
    display: none;
  }
`

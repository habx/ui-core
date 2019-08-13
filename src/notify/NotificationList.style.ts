import styled, { keyframes } from 'styled-components'

import breakpoints from '../breakpoints'
import BaseNotification from '../Notification'

export const ANIMATION_DURATION = 500

export const NotificationListContainer = styled.div`
  position: fixed;
  right: 24px;
  top: 24px;
  z-index: 99;

  @media (${breakpoints.below.phone}) {
    left: 24px;
  }
`

const PADDING = '16px 16px 16px 32px'
const MAX_HEIGHT = '200px'
const MARGIN_BOTTOM = '24px'

const fadeIn = keyframes`
  from {
    transform: translateX(602px);
  }
  
  to {
    transform: translateX(0px);
  }
`

const fadeOut = keyframes`
  0% {
    max-height: ${MAX_HEIGHT};
    margin-bottom: ${MARGIN_BOTTOM};
    transform: translateX(0px);
    padding: ${PADDING};
  }
  
  50% {
    max-height: ${MAX_HEIGHT};
    margin-bottom: ${MARGIN_BOTTOM};
    transform: translateX(602px);
    padding: ${PADDING};
  }
  
  100% {
    padding: 0;
    max-height: 0;
    margin-bottom: 0;
    transform: translateX(602px);
  }
`

export const Notification = styled(BaseNotification)`
  padding: ${PADDING};
  margin-bottom: ${MARGIN_BOTTOM};
  animation: ${fadeIn} ${ANIMATION_DURATION}ms ease-in-out;

  &[data-closing='true'] {
    animation: ${fadeOut} ${ANIMATION_DURATION * 2}ms ease-in-out;
    max-height: 0;
    margin-bottom: 0;
    transform: translateX(602px);
    padding: 0;
  }
`

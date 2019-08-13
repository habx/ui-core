import styled, { keyframes, css } from 'styled-components'

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
const MARGIN_BOTTOM = '24px'
const MAX_HEIGHT = '200px'

const slideIn = keyframes`
  from {
    transform: translateX(602px);
  }
  
  to {
    transform: translateX(0px);
  }
`

const slideOut = keyframes`
  from {
    transform: translateX(0px);
  }
  
  to {
    transform: translateX(602px);
  }
`

const shrink = keyframes`
   from {
      max-height: ${MAX_HEIGHT};
    }
    
    to {
      max-height: 0;
    }
`

export const NotificationContainer = styled.div`
  &[data-closing='true'] {
    animation: ${shrink} ${ANIMATION_DURATION}ms ease-in-out normal
      ${ANIMATION_DURATION}ms forwards;
  }
`

export const Notification = styled(BaseNotification)`
  padding: ${PADDING};
  margin-bottom: ${MARGIN_BOTTOM};
  animation: ${slideIn} ${ANIMATION_DURATION}ms linear forwards;

  &[data-closing='true'] {
    animation: ${slideOut} ${ANIMATION_DURATION}ms ease-in-out forwards;
  }
`

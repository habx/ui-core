import styled, { keyframes } from 'styled-components'

import breakpoints from '../breakpoints'
import BaseNotification from '../Notification'

export const SLIDE_DURATION = 300
export const SHRINK_DURATION = 200

export const NotificationListContainer = styled.div`
  position: fixed;
  right: 24px;
  top: 24px;
  z-index: 99;

  @media (${breakpoints.below.phone}) {
    left: 24px;
  }
`

const slideIn = keyframes`
  from {
    transform: translateX(calc(100% + 24px));
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
    transform: translateX(calc(100% + 24px));
  }
`

const shrink = keyframes`
   from {
      max-height: 200px;
    }
    
    to {
      max-height: 0;
    }
`

export const NotificationContainer = styled.div`
  &[data-closing='true'] {
    animation: ${shrink} ${SHRINK_DURATION}ms linear normal ${SLIDE_DURATION}ms
      forwards;
  }
`

export const Notification = styled(BaseNotification)`
  margin-bottom: 24px;
  animation: ${slideIn} ${SLIDE_DURATION}ms ease-in-out forwards;

  &[data-closing='true'] {
    animation: ${slideOut} ${SLIDE_DURATION}ms ease-in-out forwards;
  }
`

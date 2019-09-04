import styled, { keyframes } from 'styled-components'

import animations from '../animations'
import Background from '../Background'
import breakpoints from '../breakpoints'
import Title from '../Title'

export const ANIMATION_DURATION = 300

const FADE_IN = keyframes`
  from {
    background-color: transparent;
  }

  to {
    background-color: rgba(50, 50, 50, 0.7);
  }
`

export const ModalContainer = styled(Background)`
  padding: 48px 36px;
  position: relative;
  overflow: hidden;

  @media (${breakpoints.above.phone}) {
    width: 448px;
    border-radius: 2px;
  }

  @media (${breakpoints.below.phone}) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 24px;
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background-color: rgba(50, 50, 50, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (${breakpoints.below.phone}) {
    background-color: transparent;

    &[data-state='opening'] {
      & ${ModalContainer} {
        animation: ${animations('emergeSlantFromTop')};
      }
    }

    &[data-state='closing'] {
      & ${ModalContainer} {
        animation: ${animations('diveSlant')};
      }
    }
  }

  @media (${breakpoints.above.phone}) {
    &[data-state='opening'] {
      animation: ${FADE_IN} ${ANIMATION_DURATION}ms linear 0ms;

      & ${ModalContainer} {
        animation: ${animations('emergeSlantFromBottom')};
      }
    }

    &[data-state='closing'] {
      animation: ${FADE_IN} ${ANIMATION_DURATION}ms linear 0ms reverse;
      pointer-events: none;
      background-color: transparent;

      & ${ModalContainer} {
        animation: ${animations('diveSlant')};
      }
    }
  }

  &[data-state='closed'] {
    opacity: 0;
    pointer-events: none;
  }
`

export const TitleContainer = styled.div`
  margin-bottom: 12px;
`

export const DesktopTitle = styled(Title)`
  @media (${breakpoints.below.phone}) {
    display: none;
  }
`

export const MobileTitle = styled(Title)`
  @media (${breakpoints.above.phone}) {
    display: none;
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const CloseIconContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;

  @media (${breakpoints.below.phone}) {
    position: fixed;
  }
`

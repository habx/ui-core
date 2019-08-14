import styled, { keyframes } from 'styled-components'

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

const SLIDE_FROM_ABOVE = keyframes`
  from {
    transform: translateY(-24px);
    opacity: 0;
  }
  
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const SLIDE_FROM_BELOW = keyframes`
  from {
    transform: translateY(100%);
  }
  
  to {
    transform: translateY(0);
  }
`

export const ModalContainer = styled(Background)`
  padding: 48px 36px;
  max-width: 448px;
  position: relative;

  @media (${breakpoints.below.phone}) {
    width: 100vw;
    height: 100vh;
    align-self: flex-end;
    padding: 48px 24px;
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
    &[data-state='opening'] {
      & ${ModalContainer} {
        animation: ${SLIDE_FROM_BELOW} ${ANIMATION_DURATION}ms linear 0ms
          forwards;
      }
    }

    &[data-state='closing'] {
      & ${ModalContainer} {
        animation: ${SLIDE_FROM_BELOW} ${ANIMATION_DURATION}ms linear 0ms
          reverse;
        transform: translateY(100%);
      }
    }
  }

  @media (${breakpoints.above.phone}) {
    &[data-state='opening'] {
      & ${ModalContainer} {
        animation: ${SLIDE_FROM_ABOVE} ${ANIMATION_DURATION}ms linear 0ms
          forwards;
      }
    }

    &[data-state='closing'] {
      & ${ModalContainer} {
        animation: ${SLIDE_FROM_ABOVE} ${ANIMATION_DURATION}ms linear 0ms
          reverse;
        opacity: 0;
      }
    }
  }

  &[data-state='opening'] {
    animation: ${FADE_IN} ${ANIMATION_DURATION}ms linear 0ms;
  }

  &[data-state='closing'] {
    animation: ${FADE_IN} ${ANIMATION_DURATION}ms linear 0ms reverse;
    pointer-events: none;
    background-color: transparent;
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
`

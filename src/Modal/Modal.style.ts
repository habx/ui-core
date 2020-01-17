import styled, { keyframes } from 'styled-components'

import zIndex from '../_internal/zIndex'
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
  position: relative;
  display: flex;
  flex-direction: column;

  --modal-width: 448px;

  &[data-width='small'] {
    --modal-width: 344px;
  }

  &[data-width='large'] {
    --modal-width: 654px;
  }

  @media (${breakpoints.above.phone}) {
    width: var(--modal-width);
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 96px);
    border-radius: 2px;
  }

  @media (${breakpoints.below.phone}) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.modals};
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

export const HeaderBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;

  &[data-has-title='true'] {
    padding: 48px 36px 24px 36px;

    @media (${breakpoints.below.phone}) {
      padding: 16px 24px;
    }
  }
`

export const CloseIconContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;

  @media (${breakpoints.below.phone}) {
    &:not([data-has-title='true']) {
      position: fixed;
    }
  }

  @media (${breakpoints.below.phone}) {
    &[data-has-title='true'] {
      position: static;
      font-size: 24px;
      cursor: pointer;
    }
  }
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
  flex: 1 1 100%;
  min-height: 0;
  display: flex;
`

export const ModalScrollableContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 48px 36px;
  overflow-y: auto;
  overflow-x: hidden;

  &[data-has-title='true'] {
    padding-top: 24px;
  }

  @media (${breakpoints.below.phone}) {
    padding: 36px 24px;

    &[data-has-title='true'] {
      padding-top: 6px;
    }
  }
`

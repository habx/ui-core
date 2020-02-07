import styled, { keyframes } from 'styled-components'

import zIndex from '../_internal/zIndex'
import {
  ActionBarContainer,
  ActionBarContent,
} from '../ActionBar/ActionBar.style'
import animations from '../animations'
import Background from '../Background'
import breakpoints from '../breakpoints'
import IconButton from '../IconButton'
import theme from '../theme'
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

    --modal-horizontal-padding: 36px;
    --modal-vertical-padding: 48px;
  }

  @media (${breakpoints.below.phone}) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    --modal-horizontal-padding: 24px;
    --modal-vertical-padding: 24px;
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
  padding: var(--modal-vertical-padding) var(--modal-horizontal-padding) 12px
    var(--modal-horizontal-padding);
`

export const CloseIcon = styled(IconButton)`
  top: 12px;
  right: 12px;

  @media (${breakpoints.above.phone}) {
    position: absolute;
    color: ${theme.textColor({ opacity: 0.72 })};
  }

  @media (${breakpoints.below.phone}) {
    position: static;
    cursor: pointer;
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
  overflow-y: auto;
  overflow-x: hidden;

  padding: 12px var(--modal-horizontal-padding) var(--modal-vertical-padding)
    var(--modal-horizontal-padding);

  @media (${breakpoints.below.phone}) {
    padding-bottom: 72px;
  }

  & ${ActionBarContainer} {
    @media (${breakpoints.above.phone}) {
      margin: 0 calc(0px - var(--modal-horizontal-padding));
      position: sticky;
      bottom: 0;

      & ${ActionBarContent} {
        margin-bottom: calc(0px - var(--modal-vertical-padding));
        padding-top: 24px;
        padding-bottom: 24px;
        height: auto;
      }
    }

    @media (${breakpoints.below.phone}) {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`

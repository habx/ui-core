import styled, { keyframes } from 'styled-components'

import { zIndex } from '../_internal/theme/zIndex'
import { ActionBarContent } from '../ActionBar/ActionBar.style'
import { animations } from '../animations'
import { breakpoints } from '../breakpoints'
import { Layout } from '../Layout'
import { mixins } from '../mixins'
import { theme } from '../theme'

const FADE_IN = keyframes`
  from {
    background-color: transparent;
  }

  to {
    background-color: rgba(50, 50, 50, 0.7);
  }
`

export const ModalContainer = styled(Layout)`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

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
    border-radius: 6px;

    --layout-left-padding: 36px;
    --layout-right-padding: 36px;
    --layout-top-padding: 24px;
    --layout-bottom-padding: 24px;
  }

  @media (${breakpoints.below.phone}) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    --layout-top-padding: 20px;
    --layout-bottom-padding: 20px;
    --layout-left-padding: 20px;
    --layout-right-padding: 20px;
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
      animation: ${FADE_IN} var(--modal-animation-duration) linear 0ms;

      & ${ModalContainer} {
        animation: ${animations('emergeSlantFromBottom')};
      }
    }

    &[data-state='closing'] {
      animation: ${FADE_IN} var(--modal-animation-duration) linear 0ms reverse;
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
  flex: 0 0 auto;

  ${mixins.removeLayoutPadding({ top: true, right: true, left: true })};
  ${mixins.addLayoutPadding({ top: true, right: true, left: true })};

  padding-bottom: 12px;

  @media (${breakpoints.above.phone}) {
    align-items: baseline;
    justify-content: space-between;

    & > *:not(:last-child) {
      margin-right: 12px;
    }
  }

  @media (${breakpoints.below.phone}) {
    flex-direction: column-reverse;

    & > *:not(:first-child) {
      margin-bottom: 12px;
    }
  }
`

export const ModalContent = styled.div`
  flex: 1 1 100%;
  min-height: 0;
  display: flex;

  ${mixins.removeLayoutPadding({ right: true, bottom: true, left: true })};
`

export const ModalScrollableContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;

  ${mixins.addLayoutPadding({ right: true, bottom: true, left: true })};
  padding-top: 12px;

  @media (${breakpoints.below.phone}) {
    padding-bottom: 72px;

    & ${ActionBarContent}:not([data-count='0']):not([data-count='1']) {
      box-shadow: ${theme.shadow('low')};
    }
  }
`

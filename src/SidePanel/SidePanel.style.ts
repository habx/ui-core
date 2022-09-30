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

export const SidePanelContainer = styled(Layout)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  overflow: auto;
  overflow: overlay;
  padding: 36px;
  box-shadow: ${theme.shadow('regular')};
  z-index: ${zIndex.modals};

  --modal-width: 480px;

  @media (${breakpoints.above.phone}) {
    width: var(--modal-width);
    max-width: calc(100vw - 48px);
  }

  @media (${breakpoints.below.phone}) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
  }
`

export const SidePanelOverlay = styled.div`
  @media (${breakpoints.below.phone}) {
    background-color: transparent;

    &[data-state='opening'] {
      & ${SidePanelContainer} {
        animation: ${animations('emergeSlantFromTop')};
      }
    }

    &[data-state='closing'] {
      & ${SidePanelContainer} {
        animation: ${animations('diveSlant')};
      }
    }
  }

  @media (${breakpoints.above.phone}) {
    &[data-state='opening'] {
      animation: ${FADE_IN} var(--modal-animation-duration) linear 0ms;

      & ${SidePanelContainer} {
        animation: ${animations('emergeSlantFromBottom')};
      }
    }

    &[data-state='closing'] {
      animation: ${FADE_IN} var(--modal-animation-duration) linear 0ms reverse;
      pointer-events: none;
      background-color: transparent;

      & ${SidePanelContainer} {
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

  ${mixins.removeLayoutPadding({ top: true, right: true, left: true })};
  ${mixins.addLayoutPadding({ top: true, right: true, left: true })};

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

export const SidePanelContent = styled.div`
  flex: 1 1 100%;
  min-height: 0;
  display: flex;
  z-index: ${zIndex.modals};
`

export const SidePanelScrollableContent = styled.div`
  flex: 1;
  display: flex;
  gap: 24px;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;

  @media (${breakpoints.below.phone}) {
    padding-bottom: 72px;

    & ${ActionBarContent}:not([data-count='0']):not([data-count='1']) {
      box-shadow: ${theme.shadow('low')};
    }
  }
`

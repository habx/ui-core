import styled from 'styled-components'

import animations from '../animations'
import breakpoints from '../breakpoints'
import Modal from '../Modal'
import theme from '../theme'

export const ANIMATION_DURATION = 150

export const MenuTriggerContainer = styled.span`
  position: relative;
  align-self: flex-start;
`

export const MenuContent = styled.div`
  background-color: ${theme.color('background', { useRootTheme: true })};
  padding: 12px 0;
  box-shadow: ${theme.shadow()};
`

export const MenuContainer = styled.ul`
  z-index: 10;
  opacity: 1;
  border-radius: 4px;
  list-style-type: none;
  min-width: 100%;
  padding: 0;
  margin: 0;

  position: absolute;

  &:not([data-state='opened']) {
    pointer-events: none;
    opacity: 0;
  }

  &[data-state='opening'] {
    animation: ${animations('emergeSlantFromBottom')};
  }

  &[data-state='closing'] {
    animation: ${animations('diveSlant')};
  }

  &[data-position='top-left'] {
    top: -12px;
    left: 100%;

    & ${MenuContent} {
      transform: translateY(-100%) translateX(-100%);
    }
  }

  &[data-position='top-right'] {
    top: -12px;

    & ${MenuContent} {
      transform: translateY(-100%);
    }
  }

  &[data-position='bottom-left'] {
    top: calc(100% + 12px);
    left: 100%;

    & ${MenuContent} {
      transform: translateX(-100%);
    }
  }

  &[data-position='bottom-right'] {
    top: calc(100% + 12px);
  }

  &[data-position='left-top'] {
    top: 100%;
    left: -18px;

    & ${MenuContent} {
      transform: translateY(-100%) translateX(-100%);
    }
  }

  &[data-position='right-top'] {
    top: 100%;
    left: calc(100% + 18px);

    & ${MenuContent} {
      transform: translateY(-100%);
    }
  }

  @media (${breakpoints.below.phone}) {
    &[data-full-screen-on-mobile='true'] {
      display: none;
    }
  }
`

export const MenuFullScreenDesktop = styled(Modal)`
  @media (${breakpoints.above.phone}) {
    display: none;
  }

  @media (${breakpoints.below.phone}) {
    padding: 12px 0;
  }
`

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

  &[data-position='bottom-right'] {
    top: 100%;
  }

  &[data-position='bottom-left'] {
    top: 100%;
    left: 100%;

    & ${MenuContent} {
      transform: translateX(-100%);
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

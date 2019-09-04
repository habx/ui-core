import styled from 'styled-components'

import animations from '../animations'
import breakpoints from '../breakpoints'
import Modal from '../Modal'
import theme from '../theme'

export const ANIMATION_DURATION = 150

export const MenuContainer = styled.div`
  position: relative;
`

export const MenuContent = styled.ul`
  z-index: 10;
  box-shadow: ${theme.shadow()};
  opacity: 1;
  border-radius: 4px;
  padding: 12px 0;
  list-style-type: none;
  min-width: 100%;
  background-color: ${theme.color('background', { useRootTheme: true })};

  position: absolute;
  top: 100%;

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

  @media (${breakpoints.below.phone}) {
    &[data-full-screen-on-mobile='true'] {
      display: none;
    }
  }
`

export const MenuFullScreenDesktop = styled(Modal)`
  @media (${breakpoints.below.phone}) {
    padding: 12px 0;
  }
`

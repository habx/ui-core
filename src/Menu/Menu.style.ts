import styled from 'styled-components'

import zIndex from '../_internal/zIndex'
import animations from '../animations'
import theme from '../theme'

export const MenuTriggerContainer = styled.span`
  position: relative;
  align-self: flex-start;
`

export const MenuContent = styled.div`
  background-color: ${theme.color('background', { useRootTheme: true })};
  padding: 8px 0;
  box-shadow: ${theme.shadow()};
  border-radius: 4px;

  &[data-scrollable='true'] {
    max-height: 324px;
    overflow-x: hidden;
    overflow-y: auto;
  }
`

export const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.menus};
`

export const MenuContainer = styled.ul`
  opacity: 1;
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: fixed;

  z-index: ${zIndex.menus};

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
`

export const MenuFullScreenContainer = styled.div`
  margin: 0 calc(0px - var(--layout-right-padding)) 0
    calc(0px - var(--layout-left-padding));
`

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

  &[data-scrollable='true'] {
    max-height: 324px;
    overflow-x: hidden;
    overflow-y: auto;
  }
`

export const MenuContainer = styled.ul`
  opacity: 1;
  border-radius: 4px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: fixed;
`

export const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.dropDowns};
  display: flex;
  align-items: center;
  justify-content: center;

  &:not([data-state='opened']) {
    pointer-events: none;

    & ${MenuContainer} {
      opacity: 0;
    }
  }

  &[data-state='opening'] {
    & ${MenuContainer} {
      animation: ${animations('emergeSlantFromBottom')};
    }
  }

  &[data-state='closing'] {
    & ${MenuContainer} {
      animation: ${animations('diveSlant')};
    }
  }
`

export const MenuFullScreenContainer = styled.div`
  margin: 0 calc(0px - var(--layout-right-padding)) 0
    calc(0px - var(--layout-left-padding));
`

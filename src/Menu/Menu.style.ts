import styled from 'styled-components'

import animations from '../animations'
import theme from '../theme'

export const ANIMATION_DURATION = 150

export const MenuContainer = styled.ul`
  box-shadow: ${theme.shadow()};
  opacity: 1;
  border-radius: 4px;
  padding: 12px 0;
  list-style-type: none;
  min-width: 100%;

  position: absolute;
  top: calc(100% - 16px);

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

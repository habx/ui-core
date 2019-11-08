import styled from 'styled-components'

import { MenuTriggerContainer } from '../Menu/Menu.style'

export const NavBarMenuItemContainer = styled.div`
  & > ${MenuTriggerContainer} {
    width: 100%;
    height: 100%;
    display: block;
  }

  &[data-bottom='true'] {
    margin-top: auto;
  }

  &[data-bottom='true'] + [data-bottom='true'] {
    margin-top: initial;
  }
`

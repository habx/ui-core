import styled, { css } from 'styled-components'

import { theme } from '../theme'
import {mixins} from "../mixins";

const menuCssVariables = css`
  --menu-line-horizontal-padding: 24px;
`

export const FloatingMenuContainer = styled.div`
  box-shadow: ${theme.shadow()};
  border-radius: 4px;
`

export const FloatingMenu = styled.ul`
  margin: 0;
  padding: 8px 0;

  ${menuCssVariables};

  &[data-scrollable='true'] {
    max-height: 324px;
    overflow-x: hidden;
    overflow-y: auto;
  }
`

export const FullScreenMenu = styled.ul`
  ${mixins.removeLayoutPadding({ right: true, left: true })};
  
  padding: 0;

  ${menuCssVariables};
`

import styled, { css } from 'styled-components'

import { theme } from '../theme'

const menuCssVariables = css`
  --menu-line-horizontal-padding: 20px;
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
  margin: 0 calc(0px - var(--layout-right-padding)) 0
    calc(0px - var(--layout-left-padding));
  padding: 0;

  ${menuCssVariables};
`

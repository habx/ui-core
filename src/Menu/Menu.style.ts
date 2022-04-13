import styled, { css } from 'styled-components'

import { mixins } from '../mixins'
import { theme } from '../theme'

const menuCssVariables = css`
  --menu-line-horizontal-padding: 24px;
`

export const FloatingMenuContainer = styled.div`
  height: 100%;
  padding: 8px 0;
`

export const FloatingMenu = styled.ul`
  margin: 0;
  padding: 8px 0;
  height: inherit;
  box-shadow: ${theme.shadow()};
  border-radius: 4px;
  overflow: hidden auto;
  background-color: ${theme.color('background')};

  ${menuCssVariables};

  &[data-scrollable] {
    max-height: 324px;
  }
`

export const FullScreenMenu = styled.ul`
  ${mixins.removeLayoutPadding({ right: true, left: true })};

  padding: 0;

  ${menuCssVariables};
`

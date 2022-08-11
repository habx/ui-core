import styled, { createGlobalStyle } from 'styled-components'

import { transition } from '../animations'
import { Card } from '../Card'
import { theme } from '../theme'

export const RemoveRefresh = createGlobalStyle`
  html,
  body {
    overscroll-behavior-y: none;
    position: fixed;
    overflow: hidden;
  }
`

export const DrawerContainer = styled(Card)`
  --drawer-touch-area-height: 32px;
  --drawer-position: calc(100% - var(--drawer-touch-area-height));
  position: absolute;
  top: var(--drawer-position);
  height: 100%;
  width: 100%;
  padding-top: 32px;

  border-radius: 24px 24px 0 0;

  transition: ${transition('top', { duration: 's' })};
`

export const DrawerContent = styled.div`
  height: calc(100% - var(--drawer-position) - var(--drawer-touch-area-height));
  width: 100%;
`

export const DrawerBar = styled.div`
  position: absolute;
  top: 0;

  height: var(--drawer-touch-area-height);
  width: 100%;
  margin-left: calc(-1 * var(--layout-left-padding));
  margin-right: calc(-1 * var(--layout-right-padding));

  &:after {
    content: '';

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    height: 6px;
    width: 64px;

    margin: auto;

    background: ${theme.neutralColor(400)};
    border-radius: 12px;
  }
`

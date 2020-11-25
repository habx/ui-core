import styled from 'styled-components'

import { Background } from '../Background'
import { breakpoints } from '../breakpoints'
import { theme } from '../theme'

export const HeaderBarContainer = styled(Background)`
  height: 60px;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom: solid 1px ${theme.neutralColor(300)};
  z-index: 12;

  &[data-sticky='true'] {
    position: sticky !important;
  }
  &[data-sticky='false'] {
    position: relative !important;
  }

  &[data-small='true'] {
    height: 48px;
  }

  &[data-large='true'] {
    height: 72px;
  }

  &[data-is-in-layout='true'] {
    padding: 0 var(--layout-right-padding) 0 var(--layout-left-padding);
  }

  &:not([data-is-in-layout='true']) {
    padding: 0 36px;

    @media (${breakpoints.below.smallTablet}) {
      padding: 0 18px;
    }
  }

  &::after {
    content: '';
    height: 2px;
    position: absolute;
    left: 0;
    bottom: -1px;
    right: calc(100% * (1 - var(--header-bar-progress)));
    background-color: ${theme.color('primary')};
    transition: right 150ms ease-in-out;
  }
`

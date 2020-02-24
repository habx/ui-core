import styled from 'styled-components'

import {
  ActionBarContainer,
  ActionBarContent,
} from '../ActionBar/ActionBar.style'
import Background from '../Background'
import breakpoints from '../breakpoints'

export const LayoutContainer = styled(Background)`
  &[data-has-action-bar='true'] {
    --layout-bottom-padding: 0 !important;

    & ${ActionBarContainer} {
      @media (${breakpoints.above.phone}) {
        margin: 0 calc(0px - var(--layout-right-padding)) 0
          calc(0px - var(--layout-left-padding));
        position: sticky;
        bottom: 0;

        & ${ActionBarContent} {
          padding-top: 24px;
          padding-bottom: 24px;
          height: auto;
        }
      }

      @media (${breakpoints.below.phone}) {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
`

import styled, { css } from 'styled-components'

import {
  ActionBarContainer,
  ActionBarContent,
} from '../ActionBar/ActionBar.style'
import { Background } from '../Background'
import { breakpoints } from '../breakpoints'
import { HeaderBarContainer } from '../HeaderBar/HeaderBar.style'
import { mixins } from '../mixins'

const style = css`
  ${mixins.addLayoutPadding()};

  &[data-has-action-bar='true'] {
    --layout-bottom-padding: 0 !important;

    & ${ActionBarContainer} {
      @media (${breakpoints.above.phone}) {
        ${mixins.removeLayoutPadding({ right: true, left: true })};

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

  &[data-has-header-bar='true'] {
    & ${HeaderBarContainer} {
      ${mixins.removeLayoutPadding({ top: true, right: true, left: true })};

      margin-bottom: var(--layout-top-padding);
      position: sticky;
      top: calc(0px - var(--layout-top-padding));
    }
  }
`

export const LayoutColoredContainer = styled(Background)`
  ${style}
`

export const LayoutTransparentContainer = styled.div`
  ${style}
`

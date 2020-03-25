import styled from 'styled-components'

import breakpoints from '../breakpoints'
import Layout from '../Layout'
import theme from '../theme'

export const CardContainer = styled(Layout)`
  border-radius: 4px;
  position: relative;
  transition: box-shadow 150ms ease-in-out;
  --layout-left-padding: 0;
  --layout-right-padding: 0;
  --layout-top-padding: 0;
  --layout-bottom-padding: 0;

  &:not([data-flat='true']) {
    box-shadow: ${theme.shadow('low')};
  }

  &[data-animated='true'] {
    &:hover {
      cursor: pointer;
      transform: translateY(-4px);

      &:not([data-flat='true']) {
        box-shadow: ${theme.shadow('low', { hover: true })};
      }
    }
  }

  &[data-spacing='regular'] {
    --layout-left-padding: 36px;
    --layout-right-padding: 36px;
    --layout-top-padding: 24px;
    --layout-bottom-padding: 24px;

    @media (${breakpoints.below.smallTablet}) {
      --layout-left-padding: 18px;
      --layout-right-padding: 18px;
    }
  }

  &[data-spacing='regular-horizontal-only'] {
    --layout-left-padding: 36px;
    --layout-right-padding: 36px;

    @media (${breakpoints.below.smallTablet}) {
      --layout-left-padding: 18px;
      --layout-right-padding: 18px;
    }
  }

  &[data-spacing='narrow'] {
    --layout-left-padding: 18px;
    --layout-right-padding: 18px;
    --layout-top-padding: 12px;
    --layout-bottom-padding: 12px;
  }

  &[data-spacing='narrow-horizontal-only'] {
    --layout-left-padding: 18px;
    --layout-right-padding: 18px;
  }
`

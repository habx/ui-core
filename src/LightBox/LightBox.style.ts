import styled, { keyframes } from 'styled-components'

import { zIndex } from '../_internal/theme/zIndex'
import { breakpoints } from '../breakpoints'
import { Layout } from '../Layout'
import { RoundIconButton } from '../RoundIconButton'

export const FADE_IN = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const LightBoxContainer = styled(Layout)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.modals};
  display: flex;
  flex-direction: column;
  overflow: auto;

  --layout-left-padding: 0;
  --layout-right-padding: 0;
  --layout-top-padding: 0;
  --layout-bottom-padding: 0;

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

  &[data-state='opening'] {
    animation: ${FADE_IN} var(--lightbox-animation-duration) linear 0ms;
  }

  &[data-state='closing'] {
    animation: ${FADE_IN} var(--lightbox-animation-duration) linear 0ms reverse;
    opacity: 0;
    pointer-events: none;
  }

  &[data-state='closed'] {
    opacity: 0;
    pointer-events: none;
  }
`

export const CloseIcon = styled(RoundIconButton)`
  position: fixed;
  top: 12px;
  right: 36px;
  z-index: 13;
`

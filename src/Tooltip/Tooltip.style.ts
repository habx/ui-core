import styled from 'styled-components'

import zIndex from '../_internal/zIndex'
import animations from '../animations'
import { ANIMATION_DURATIONS } from '../animations'
import Background from '../Background'
import theme from '../theme'

export const ANIMATION_DURATION = ANIMATION_DURATIONS.s

export const TooltipContainer = styled(Background)`
  border-radius: 4px;
  padding: 6px 12px;
  max-width: 376px;
  opacity: 0;
  pointer-events: none;
  box-shadow: ${theme.shadow('low')};
  position: fixed;
  z-index: ${zIndex.tooltips};

  &[data-has-description='true'] {
    padding: 12px 24px;
  }

  &[data-state='opening'] {
    animation: ${animations('emerge', { duration: 's' })};
  }

  &[data-state='opened'] {
    opacity: 1;
  }

  &[data-state='closing'] {
    animation: ${animations('dive')};
  }
`

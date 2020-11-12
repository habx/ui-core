import styled from 'styled-components'

import { zIndex } from '../_internal/zIndex'
import { animations, ANIMATION_DURATIONS } from '../animations'
import { Background } from '../Background'
import { theme } from '../theme'

const ANIMATION_DELAY = 500
const DURATION = 's' as const

export const ANIMATION_DURATION =
  ANIMATION_DELAY + ANIMATION_DURATIONS[DURATION]

export const TooltipContainer = styled(Background)`
  border-radius: 4px;
  padding: 6px 12px;
  max-width: 376px;
  pointer-events: none;
  box-shadow: ${theme.shadow('low')};
  position: fixed;
  z-index: ${zIndex.tooltips};

  &[data-has-description='true'] {
    padding: 12px 24px;
  }

  &[data-state='opening'] {
    animation: ${animations('emerge', { duration: DURATION })};
    animation-delay: ${ANIMATION_DELAY}ms;
  }

  &:not([data-state='opened']) {
    opacity: 0;
  }

  &[data-state='closing'] {
    animation: ${animations('dive')};
  }
`

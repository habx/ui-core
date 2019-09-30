import styled from 'styled-components'

import { ANIMATION_DURATIONS } from '../animations/animations'
import Background from '../Background'
import { animations } from '../index'
import theme from '../theme'

export const ANIMATION_DURATION = ANIMATION_DURATIONS.s

export const TooltipContainer = styled(Background)`
  border-radius: 4px;
  padding: 6px 12px;
  max-width: 376px;
  pointer-events: none;
  box-shadow: ${theme.shadow('low')};

  &[data-has-description='true'] {
    padding: 12px 24px;
  }
`

export const TooltipTriggerCursorWrapper = styled.div``

export const TooltipTriggerContent = styled.div`
  display: flex;
  justify-content: center;
  opacity: 0;
  pointer-events: none;

  & ${TooltipContainer} {
    transform: translateY(-100%);
  }

  &:not([data-follow-cursor='true']) {
    position: absolute;
    top: -12px;
    left: -100px;
    right: -100px;

    &[data-has-description='true'] {
      top: -24px;
    }
  }

  &[data-follow-cursor='true'] {
    overflow: hidden;
  }
`

export const TooltipTriggerContainer = styled.div`
  position: relative;

  &[data-state='opening'] {
    & ${TooltipTriggerContent} {
      animation: ${animations('emerge', { duration: 's' })};
    }
  }

  &[data-state='opened'] {
    & ${TooltipTriggerContent} {
      opacity: 1;
    }
  }

  &[data-state='closing'] {
    & ${TooltipTriggerContent} {
      animation: ${animations('dive')};
    }
  }
`

import styled from 'styled-components'

import {
  ANIMATION_DURATIONS,
  ANIMATION_TIMING_FUNCTION,
} from '../animations/animations'
import palette from '../palette'
import theme from '../theme'

export const ExpansionPanelItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:not([data-light='true']):not(:last-child) {
    border-bottom: 1px solid ${palette.darkBlue[300]};
  }
`

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 32px;
  padding: 6px 0;
  cursor: pointer;
  user-select: none;
  color: ${theme.color('secondary')};
`

export const ExpansionPanelItemContent = styled.div<{ height: number }>`
  transition: max-height ${ANIMATION_DURATIONS.l}ms ${ANIMATION_TIMING_FUNCTION};
  overflow: hidden;

  &[data-state='opening'],
  &[data-state='closing'] {
    max-height: ${({ height }) => height}px;
  }

  &[data-state='closed'] {
    max-height: 0;
  }
`

export const CoreContent = styled.div`
  padding: 12px var(--expansion-panel-horizontal-padding);
`

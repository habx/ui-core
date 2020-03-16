import styled from 'styled-components'

import {
  ANIMATION_DURATIONS,
  ANIMATION_TIMING_FUNCTION,
} from '../animations/animations'
import Layout from '../Layout'
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
  padding: 6px var(--layout-right-padding) 6px var(--layout-left-padding);
  cursor: pointer;
  user-select: none;
  color: ${theme.color('secondary')};
`

export const ExpansionPanelItemContent = styled(Layout)<{ height: number }>`
  transition: max-height ${ANIMATION_DURATIONS.l}ms ${ANIMATION_TIMING_FUNCTION};
  overflow: hidden;

  --layout-top-padding: 0;
  --layout-bottom-padding: 0;

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

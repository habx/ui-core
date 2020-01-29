import styled from 'styled-components'

import theme from '../theme'

export const ANIMATION_DURATION = 300

export const ExpansionPanelItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    border-bottom: 1px solid ${theme.color('secondary')};
  }
`

export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 32px;
  line-height: 1.3;
  padding: 8px 16px;
  cursor: pointer;
  user-select: none;
  color: ${theme.color('secondary')};
`

export const ExpansionPanelItemContent = styled.div<{ height: number }>`
  transition: max-height ${ANIMATION_DURATION}ms ease-in-out;
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
  padding: 8px 16px 16px 16px;
`

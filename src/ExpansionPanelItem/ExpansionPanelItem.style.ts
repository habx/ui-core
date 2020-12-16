import styled from 'styled-components'

import { transition } from '../animations'
import { Layout } from '../Layout'
import { theme } from '../theme'

export const ExpansionPanelItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  transition: ${transition('all')};

  @media screen {
    &:not([data-light='true']) {
      border-bottom: 1px solid ${theme.neutralColor(300)};

      &:hover {
        border-color: ${theme.neutralColor(700)};
      }

      &[data-state='opened'],
      &[data-state='opening'] {
        border-color: ${theme.color('primary')};
      }
    }
  }

  &[data-disabled='true'] {
    pointer-events: none;
    opacity: 0.7;
  }
`

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 32px;
  padding: 24px var(--layout-right-padding) 24px var(--layout-left-padding);
  cursor: pointer;
  user-select: none;
  color: ${theme.color('secondary')};

  --expansionPanelItemFontSize: 16px;
  &[data-size='large'] {
    --expansionPanelItemFontSize: 18px;
  }
  &[data-size='small'] {
    padding: 12px var(--layout-right-padding) 12px var(--layout-left-padding);
    --expansionPanelItemFontSize: 12px;
  }
`

export const HeaderBarElement = styled.div`
  display: flex;
  align-items: center;

  color: ${theme.neutralColor(900)};
  font-weight: 500;
  line-height: 24px;
  font-family: ${theme.font()};

  font-size: var(--expansionPanelItemFontSize);

  @media screen {
    &:first-child > *:not(:last-child) {
      margin-right: 12px;
    }
    &:last-child > *:not(:first-child) {
      margin-left: 12px;
    }
  }
`

export const HeaderBarTitle = styled.span`
  font-size: var(--expansionPanelItemFontSize);
`

export const HeaderBarDescription = styled.span`
  font-size: calc(var(--expansionPanelItemFontSize) - 2px);
  color: ${theme.neutralColor(700)};
`

export const ExpansionPanelItemContent = styled(Layout)<{ height: number }>`
  transition: ${transition('max-height', { duration: 'l' })};
  overflow: hidden;

  --layout-top-padding: 0;
  --layout-bottom-padding: 0;

  @media screen {
    &[data-state='opening'],
    &[data-state='closing'] {
      max-height: ${({ height }) => height}px;
    }

    &[data-state='closed'] {
      max-height: 0;
    }
  }
`

export const CoreContent = styled.div`
  @media screen {
    padding-bottom: 48px;
  }
`

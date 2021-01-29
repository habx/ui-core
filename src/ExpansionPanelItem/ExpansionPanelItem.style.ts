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

  padding-bottom: var(--expansion-panel-item-horizontal-padding);

  --expansion-panel-item-horizontal-padding: 24px;
  --expansion-panel-item-font-size: 16px;

  &[data-size='large'] {
    --expansion-panel-item-font-size: 18px;
  }

  &[data-size='small'] {
    --expansion-panel-item-font-size: 12px;
  }
`

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 32px;

  cursor: pointer;
  user-select: none;
  color: ${theme.color('secondary')};

  padding: var(--expansion-panel-item-horizontal-padding)
    var(--layout-right-padding) 0 var(--layout-left-padding);
`

export const HeaderBarElement = styled.div`
  display: flex;
  align-items: center;

  color: ${theme.neutralColor(900)};
  font-weight: 500;
  line-height: 24px;
  font-family: ${theme.font()};

  font-size: var(--expansion-panel-item-font-size);

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
  font-size: var(--expansion-panel-item-font-size);
`

export const HeaderBarDescription = styled.span`
  font-size: calc(var(--expansion-panel-item-font-size) - 2px);
  color: ${theme.neutralColor(700)};
`

export const ExpansionPanelItemContent = styled(Layout)`
  transition: ${transition('max-height', { duration: 'l' })};
  overflow: hidden;

  --layout-top-padding: 0;
  --layout-bottom-padding: 0;

  @media screen {
    &[data-state='opening'],
    &[data-state='closing'] {
      max-height: var(--expansion-panel-content-height);
    }

    &[data-state='closed'] {
      max-height: 0;
    }
  }
`

export const CoreContent = styled.div`
  @media screen {
    padding-top: var(--expansion-panel-item-horizontal-padding);
  }
`

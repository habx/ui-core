import styled from 'styled-components'

import { Text } from '../Text'
import { theme } from '../theme'

export const AlertBannerContainer = styled.div`
  font-family: ${theme.font()};

  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: flex-start;

  padding: 12px 24px;
  border-radius: 6px;

  background: var(--alert-panel-background);
  color: var(--alert-panel-color);

  --alert-panel-background: ${theme.neutralColor(100)};
  --alert-panel-color: ${theme.neutralColor(700)};
  --alert-panel-title-color: ${theme.neutralColor(700)};
  --alert-panel-icon-color: ${theme.neutralColor(500)};

  &[data-warning='true'] {
    --alert-panel-background: ${theme.color('warning', {
      variation: 'calmer',
    })};
    --alert-panel-color: ${theme.color('warning', { variation: 'loud' })};
    --alert-panel-icon-color: var(--alert-panel-color);
    --alert-panel-title-color: var(--alert-panel-color);
  }
  &[data-success='true'] {
    --alert-panel-background: ${theme.color('success', {
      variation: 'calmer',
    })};
    --alert-panel-color: ${theme.color('success')};
    --alert-panel-icon-color: var(--alert-panel-color);
    --alert-panel-title-color: var(--alert-panel-color);
  }
  &[data-error='true'] {
    --alert-panel-background: ${theme.color('error', { variation: 'calmer' })};
    --alert-panel-color: ${theme.color('error')};
    --alert-panel-icon-color: var(--alert-panel-color);
    --alert-panel-title-color: var(--alert-panel-color);
  }

  &[data-bare='true'] {
    --alert-panel-background: none;
    --alert-panel-color: ${theme.neutralColor(400)};
    --alert-panel-icon-color: var(--alert-panel-color);
    --alert-panel-title-color: var(--alert-panel-color);
  }
`

export const IconContainer = styled.div`
  margin: 2px 12px 0 -12px;
  color: var(--alert-panel-icon-color);
`

export const IllustrationContainer = styled.div`
  flex: 0 0 auto;

  margin: 2px 12px 0 -12px;
  width: 48px;
`

export const AlertPanelTitle = styled(Text)`
  color: var(--alert-panel-title-color);
  font-weight: 500;
  margin-top: -2px;
`

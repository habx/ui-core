import styled from 'styled-components'

import { breakpoints } from '../breakpoints'
import { Text } from '../Text'
import { theme } from '../theme'

export const AlertBannerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 100%;
  padding: 12px 24px;

  background: var(--alert-panel-background);
  color: var(--alert-panel-color);

  --alert-panel-background: ${theme.color('secondary', {
    variation: 'base',
    opacity: 0.85,
  })};
  --alert-panel-color: ${theme.color('primary', { variation: 'contrastText' })};
  --alert-panel-title-color: ${theme.neutralColor(700)};
  --alert-panel-icon-color: ${theme.neutralColor(500)};

  &[data-warning='true'] {
    --alert-panel-background: ${theme.color('warning', {
      variation: 'base',
    })};
  }
  &[data-success='true'] {
    --alert-panel-background: ${theme.color('success', {
      variation: 'base',
    })};
  }
  &[data-error='true'] {
    --alert-panel-background: ${theme.color('error', { variation: 'base' })};
  }

  &[data-primary='true'] {
    --alert-panel-background: ${theme.color('primary', { variation: 'base' })};
  }

  @media (${breakpoints.below.smallTablet}) {
    padding: 12px 20px;
  }
`

export const AlertBannerText = styled(Text)`
  width: 100%;
  text-align: center;
  color: var(--alert-panel-color);
  --alert-panel-color: ${theme.color('primary', { variation: 'contrastText' })};
`

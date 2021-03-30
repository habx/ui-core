import styled from 'styled-components'

import { theme } from '../theme'

export const AlertBannerContainer = styled.div`
  font-family: ${theme.font()};

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  padding: 12px 24px;
  border-radius: 6px;

  background: ${theme.color('primary', { variation: 'calmer' })};
  color: ${theme.color('primary', { variation: 'loud' })};

  &[data-warning='true'] {
    background: ${theme.color('warning', { variation: 'calmer' })};
    color: ${theme.color('warning', { variation: 'loud' })};
  }

  &[data-error='true'] {
    background: ${theme.color('error', { variation: 'calmer' })};
    color: ${theme.color('error', { variation: 'loud' })};
  }
`

export const IconContainer = styled.div`
  margin-right: 16px;
  margin-top: 2px;
`

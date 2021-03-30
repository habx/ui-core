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

  background: ${theme.color('primary', { variation: 'calmer', dynamic: true })};
  color: ${theme.color('primary', { variation: 'loud', dynamic: true })};
`

export const IconContainer = styled.div`
  margin: 2px 12px 0 -12px;
`

export const AlertPanelTitle = styled(Text)`
  color: ${theme.color('primary', { variation: 'loud', dynamic: true })};
  font-weight: 500;
  margin-top: -2px;
`

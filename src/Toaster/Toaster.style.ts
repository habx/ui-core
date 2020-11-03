import styled from 'styled-components'

import { Background } from '../Background'
import { theme } from '../theme'

export const NotificationContainer = styled(Background)`
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  padding: 12px 16px 12px 24px;
  width: 385px;
  max-width: calc(100vw - 48px);
  justify-content: space-between;
  overflow: hidden;
  box-shadow: ${theme.shadow()};
  font-family: ${theme.font()};
`

export const NotificationContent = styled.div`
  margin: 0;
  font-size: 16px;
  line-height: 1.33;
  display: flex;
  align-items: center;
`

export const NotificationInformation = styled.div``

export const IllustrationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-right: 24px;
  color: ${theme.textColor()};

  & img {
    height: 48px;
  }
`

export const CloseContainer = styled.div`
  font-size: 24px;
  color: ${theme.textColor({ opacity: 0.72 })};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
`

import styled from 'styled-components'

import palette from '../palette'
import theme from '../theme'

export const NotificationContainer = styled.div<{
  warning?: boolean
  error?: boolean
}>`
  background-color: ${palette.darkBlue[100]};
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 16px 0 24px;
  width: 582px;
  max-width: calc(100vw - 48px);
  height: 72px;
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

  & img {
    height: 48px;
  }
`

export const CloseContainer = styled.div`
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
`

import styled from 'styled-components'

import { palette } from '../palette'
import { theme } from '../theme'

export const NotificationContainer = styled.div`
  background-color: ${palette.darkBlue[100]};
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 12px 16px 12px 24px;
  width: 582px;
  max-width: calc(100vw - 48px);
  min-height: 72px;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: ${theme.shadow()};
  font-family: ${theme.font()};

  &[data-warning='true'] {
    background-color: ${palette.orange[400]};
  }
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

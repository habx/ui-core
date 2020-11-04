import styled from 'styled-components'

import { Background } from '../Background'
import { breakpoints } from '../breakpoints'
import { Text } from '../Text'
import { theme } from '../theme'

export const ToasterContent = styled(Background)`
  border-radius: 4px;
  padding: 12px 12px 12px 24px;
  width: 385px;
  overflow: hidden;
  box-shadow: ${theme.shadow()};
  font-family: ${theme.font()};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  user-select: none;
  cursor: pointer;

  @media (${breakpoints.below.phone}) {
    width: calc(100vw - 48px);
  }
`

export const ToasterText = styled(Text)`
  flex: 1 1 100%;

  & a {
    color: ${theme.color('secondary', { dynamic: true })};
  }
`

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

import styled from 'styled-components'

import { Text } from '../Text'
import { theme } from '../theme'

export const PhoneInputContainer = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
`

export const FlagButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  font-size: 16px;
  text-transform: uppercase;
  height: 100%;
  color: inherit;
  margin-right: 8px;

  & > *:not(:last-child) {
    margin-right: 4px;
  }
`

export const PhoneIndicator = styled.div`
  font-size: 16px;
`

export const CountryFilterInput = styled.input`
  width: 0;
  padding: 0;
  opacity: 0;
  border: none;
  outline: none;
  position: absolute;
`

export const MenuLineTitle = styled(Text)`
  display: flex;
`

export const MenuLineSubtitle = styled(Text)`
  color: ${theme.neutralColor(500)};
  margin-left: 12px;
`

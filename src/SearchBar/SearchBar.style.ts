import styled from 'styled-components'

import { transition } from '../animations'
import { theme } from '../theme'
import { TogglePanel } from '../TogglePanel'

export const SearchPanelContainer = styled(TogglePanel)`
  box-shadow: ${theme.shadow('regular')};
`

export const SearchPanelInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px;
  color: ${theme.textColor()};
  border-bottom: 1px solid ${theme.neutralColor(300)};
`

export const SearchPanelInputElementLeft = styled.div`
  font-size: 24px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 8px;
`

export const SearchPanelInput = styled.input.attrs(() => ({
  type: 'text',
}))`
  flex: 1 1 100%;

  border: none;
  padding: 0;
  background: none;
  font-size: inherit;
  align-self: stretch;
  min-width: 0;
  transition: ${transition('color')};
  color: ${theme.textColor()};
  height: 48px;
  font-family: ${theme.font()};

  &:focus {
    outline: none;
    box-shadow: none;

    &::placeholder {
      opacity: 0;
    }
  }
`

export const SearchPanelContent = styled.div`
  padding: 24px;
`

export const TriggerElementContainer = styled.div`
  box-shadow: 0 0 0 4px ${theme.color('primary', { opacity: 0.3 })};
  border-radius: 4px;
`

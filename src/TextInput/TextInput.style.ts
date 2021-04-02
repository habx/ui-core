import styled from 'styled-components'

import { transition } from '../animations'
import { inputStyle } from '../FakeInput'
import { Icon } from '../Icon'
import { theme } from '../theme'

export const SideElementContainer = styled.div`
  font-size: 18px;
  height: 100%;
  display: flex;
  align-items: center;
  color: var(--input-placeholder-color);

  &[data-position='left'] {
    margin-right: 8px;
  }

  &[data-position='right'] {
    margin-left: 8px;
  }
`

export const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  align-self: stretch;
  flex: 1 1 100%;
  color: var(--input-color);
  font-family: ${theme.font()};
  font-size: var(--input-font-size);

  transition: ${transition('all')};

  &::placeholder {
    transition: ${transition('color')};
    color: var(--input-placeholder-color);
  }
`

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 12px;
  max-height: 48px;
  min-height: 48px;

  &[data-small='true'] {
    padding: 0 12px;
    min-height: 36px;
    max-height: 36px;
  }

  &[data-tiny='true'] {
    min-height: 24px;
    max-height: 24px;
    padding: 0 6px;
  }

  ${inputStyle};
`

export const IconButton = styled(Icon)`
  &:hover {
    cursor: pointer;
  }
`

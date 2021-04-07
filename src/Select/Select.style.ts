import styled from 'styled-components'

import { transition } from '../animations'
import { inputStyle } from '../FakeInput'
import { theme } from '../theme'

export const Placeholder = styled.div`
  flex: 1 1 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: ${transition('color')};
`

export const IconsContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  color: ${theme.textColor({ useRootTheme: true })};

  span {
    font-size: 18px;
    margin-left: 6px;
  }
`

export const SelectContainer = styled.div`
  ${inputStyle};

  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 400;

  height: var(--select-height);
  padding: 0 12px;
  --select-height: 48px;

  cursor: pointer;

  &[data-small='true'] {
    --select-height: 36px;
  }

  &[data-tiny='true'] {
    --select-height: 24px;
    padding: 0 6px;
  }

  &[data-open='true'] {
    transition: z-index ease-in 0s;
    z-index: 10;
  }
`

export const SearchInput = styled.input.attrs(() => ({
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

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: none;

    &::placeholder {
      opacity: 0;
    }
  }
`

export const ElementLeftContainer = styled.div`
  margin-right: 8px;
  color: var(--input-placeholder-color);
`

export const ResetIconContainer = styled.div`
  transition: ${transition('opacity')};
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  color: var(--input-placeholder-color);

  &:not([data-visible='true']) {
    opacity: 0;
    pointer-events: none;
  }
`

export const ElementRightContainer = styled.div`
  transition: ${transition('opacity')};
  color: var(--input-placeholder-color);

  &:not([data-visible='true']) {
    opacity: 0;
    pointer-events: none;
  }
`

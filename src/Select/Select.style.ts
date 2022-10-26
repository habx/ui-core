import styled, { css } from 'styled-components'

import { transition } from '../animations'
import { applyOpacityToColor, stringifyColor } from '../color'
import { inputStyle } from '../FakeInput'
import { theme } from '../theme'

export const Placeholder = styled.div`
  flex: 1 1 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: ${transition('color')};
  user-select: none;

  &[data-position='right'] {
    text-align: right;
  }
  &[data-position='center'] {
    text-align: center;
  }

  > :not(:first-child)::before {
    content: ', ';
  }
`

export const IconsContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  color: ${theme.textColor({ useRootTheme: true })};
  font-size: var(--select-icon-size);
`

export const SelectContainer = styled.div`
  ${inputStyle};

  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 400;

  ${({ color }) =>
    color &&
    css`
      &:not([data-bare='true']) {
        background-color: ${stringifyColor(applyOpacityToColor(color, 0.15))};
        border-color: ${stringifyColor(applyOpacityToColor(color, 0.25))};
      }
    `}

  height: var(--select-height);
  padding: 0 12px;
  --select-height: 48px;
  --select-icon-size: 24px;

  cursor: pointer;

  &[data-small='true'] {
    --select-height: 36px;
  }

  &[data-tiny='true'] {
    --select-height: 24px;
    --select-icon-size: 16px;
    padding: 0 6px;
  }

  &[data-open='true'] {
    transition: z-index ease-in 0s;
    z-index: 10;
  }

  &[data-round='true'] {
    border-radius: 100px;
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
  display: flex;
  align-items: center;
  color: var(--input-placeholder-color);
`

export const Line = styled.div`
  border-left: 1px solid ${theme.neutralColor(300)};
  margin-left: 6px;
  height: 24px;
`

export const ElementRightContainer = styled.div`
  color: var(--input-placeholder-color);
  margin-left: 6px;
`

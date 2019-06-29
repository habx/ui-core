import styled from 'styled-components'

import palette from '../palette'
import TextInput from '../TextInput'
import theme from '../theme'

export const MainInput = styled(TextInput)`
  flex: 1 1 100%;
  border-radius: 0;
  border: none;
  max-height: unset;
  min-height: unset;
`

export const CountryOptions = styled.div`
  user-select: none;
  width: 110px;
  background-color: ${theme.color('input', { variation: 'background' })};
  color: ${theme.color('input', { variation: 'placeholder' })};
  font-family: ${theme.get('textFont')}, sans-serif;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  transition: all 150ms ease-in-out;
`

export const PhoneInputContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 100%;
  overflow: hidden;
  transition: all 150ms ease-in-out;
  max-height: 3rem;
  min-height: 3rem;

  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: solid 1.5px ${theme.color('input', { variation: 'background' })};
  border-radius: 4px;

  &:hover,
  &:focus-within {
    border-color: ${theme.color('input', { variation: 'border' })};
  }

  &[data-error='true'] {
    border-color: ${palette.orange[400]};
    box-shadow: 0 1px 0 ${palette.orange[400]};

    & ${CountryOptions} {
      border-color: ${palette.orange[400]};
    }
  }

  &[data-disabled='true'] {
    pointer-events: none;
    border-color: ${theme.color('input', { variation: 'background' })};

    & ${CountryOptions} {
      border-right-color: #d0e4e6;
      color: ${theme.color('input', { variation: 'disabledPlaceholder' })};

      & svg {
        filter: grayscale();
        opacity: 0.7;
      }
    }
  }

  &[data-small='true'] {
    min-height: 2.3rem;
    max-height: 2.3rem;
  }

  &:focus-within {
    ${CountryOptions} {
      background-color: #fff;
    }
  }
`

export const FlagContainer = styled.div`
  border-radius: 2px;
  border: 1px ${theme.color('input', { variation: 'background' })} solid;
  display: flex;
  overflow: hidden;
  height: 15px;

  & > svg {
    height: 100%;
  }
`

export const PhoneIndicator = styled.div`
  font-size: 16px;
  padding-top: 1px;
`

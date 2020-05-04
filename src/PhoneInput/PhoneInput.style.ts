import styled from 'styled-components'

import palette from '../palette'
import Text from '../Text'
import TextInput from '../TextInput'
import theme from '../theme'

export const MainInput = styled(TextInput)`
  flex: 1 1 100%;

  & > input {
    border-radius: 0;
    border-width: 0;
  }
`

export const CountryOptions = styled.div`
  user-select: none;
  width: 110px;
  background-color: ${palette.darkBlue[200]};
  color: ${theme.textColor({ useRootTheme: true })};
  font-family: ${theme.font()};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  transition: all 150ms ease-in-out;
`

export const PhoneInputContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 100%;
  overflow: hidden;
  transition: all 150ms ease-in-out;
  max-height: 48px;
  min-height: 48px;

  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: solid 1.5px ${palette.darkBlue[200]};
  border-radius: 4px;

  &:hover,
  &:focus-within {
    border-color: ${palette.darkBlue[300]};
  }

  &[data-background='true'] {
    border-color: #fff;

    & ${CountryOptions} {
      background-color: #fff;
    }
  }

  &[data-error='true'] {
    border-color: ${palette.orange[400]};
    box-shadow: 0 1px 0 ${palette.orange[400]};

    & ${CountryOptions} {
      border-color: ${palette.orange[400]};
      color: ${palette.orange[400]};
    }
  }

  &[data-disabled='true'] {
    pointer-events: none;
    border-color: ${palette.darkBlue[200]};

    & ${CountryOptions} {
      border-right-color: #d0e4e6;
      color: ${theme.textColor({ useRootTheme: true })};

      & svg {
        filter: grayscale();
        opacity: 0.7;
      }
    }
  }

  &[data-small='true'] {
    min-height: 36px;
    max-height: 36px;
  }

  &:focus-within {
    & ${CountryOptions} {
      background-color: #fff;
    }
  }
`

export const FlagContainer = styled.div`
  border-radius: 2px;
  border: 1px ${palette.darkBlue[200]} solid;
  display: flex;
  overflow: hidden;
  height: 15px;
  font-size: 12px;
  text-transform: uppercase;

  & > span {
    &:first-child {
      margin-right: 4px;
    }
    &:last-child {
      font-size: 9px;
      align-self: center;
    }
  }
`

export const PhoneIndicator = styled.div`
  font-size: 16px;
  padding-top: 1px;
`

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  outline: none;
  background: none;
`

export const MenuLineTitle = styled(Text)`
  display: flex;
`

export const MenuLineSubtitle = styled(Text)`
  color: ${palette.darkBlue[500]};
  margin-left: 12px;
`

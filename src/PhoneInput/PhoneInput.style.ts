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
  background-color: ${palette.darkBlue[200]};
  color: ${theme.textColor('placeholder')};
  font-family: ${theme.font()};
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
    }
  }

  &[data-disabled='true'] {
    pointer-events: none;
    border-color: ${palette.darkBlue[200]};

    & ${CountryOptions} {
      border-right-color: #d0e4e6;
      color: ${theme.textColor('disabledPlaceholder')};

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

  & > svg {
    height: 100%;
  }
`

export const PhoneIndicator = styled.div`
  font-size: 16px;
  padding-top: 1px;
`

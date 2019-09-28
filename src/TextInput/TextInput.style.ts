import styled, { css } from 'styled-components'

import breakpoints from '../breakpoints'
import palette from '../palette'
import theme from '../theme'

export const inputStyle = css`
  font-family: ${theme.font()};
  font-size: 16px;

  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 4px;

  transition: all 150ms ease-in-out;

  &:disabled {
    pointer-events: none;
  }

  &:not([data-light='true']) {
    border: solid 1.5px ${palette.darkBlue[200]};
    color: ${theme.textColor('base')};
    background-color: ${palette.darkBlue[200]};

    &::placeholder {
      color: ${theme.textColor('placeholder')};
    }

    &:disabled {
      border-color: ${palette.darkBlue[200]};
      background-color: ${palette.darkBlue[200]};
      color: ${palette.darkBlue[700]};
      pointer-events: none;

      &::placeholder {
        color: ${theme.textColor('disabledPlaceholder')};
      }
    }

    &:hover,
    &:focus {
      border-color: ${palette.darkBlue[300]};
    }

    &:focus {
      background-color: #fff;
    }

    &[data-background='true'] {
      background-color: #fff;
      border-color: #fff;
    }

    &[data-error='true'] {
      border-color: ${palette.orange[400]};
      color: ${palette.orange[400]};
      box-shadow: 0 1px 0 ${palette.orange[400]};
    }
  }

  &[data-light='true'] {
    color: ${theme.color('primary')};
    font-size: 18px;
    padding: 0;
  }

  @media (${breakpoints.below.phone}) {
    font-size: 14px;
  }
`

export const Input = styled.input`
  flex: 1;
  margin: 0;
  padding: 0 16px;
  max-height: 3rem;
  min-height: 3rem;
  max-width: 100%;
  min-width: 0;
  width: 100%;

  &[data-small='true'] {
    padding: 0 12px;
    min-height: 2.3rem;
    max-height: 2.3rem;
  }

  ${inputStyle};

  &[data-light='true'] {
    background-color: transparent;
    border: none;
  }
`

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`

export const RightElementContainer = styled.div`
  position: absolute;
  top: 0;
  right: 16px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-family: ${theme.font()};

  &[data-light='true'] {
    right: 0;
  }
`

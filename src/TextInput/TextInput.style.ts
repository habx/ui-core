import styled from 'styled-components'

import breakpoints from '../breakpoints'
import palette from '../palette'
import theme from '../theme'

export const Input = styled.input`
  font-family: ${theme.get('textFont')}, sans-serif;
  flex: 1;
  margin: 0;
  padding: 0 16px;
  max-height: 3rem;
  min-height: 3rem;
  max-width: 100%;
  min-width: 0;
  font-size: 16px;

  background-color: ${theme.color('input', { variation: 'background' })};
  color: ${theme.color('secondary')};

  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: solid 1.5px ${theme.color('input', { variation: 'background' })};
  border-radius: 4px;

  transition: all 150ms ease-in-out;

  &::placeholder {
    color: ${theme.color('input', { variation: 'text' })};
  }

  &[data-small='true'] {
    padding: 12px;
    min-height: 2.3rem;
    max-height: 2.3rem;
  }

  &:disabled {
    border-color: ${theme.color('input', { variation: 'background' })};
    background-color: ${theme.color('input', { variation: 'background' })};
    color: ${palette.darkBlue[700]};
  }

  &:not(:disabled) {
    &:hover,
    &:focus {
      border-color: ${theme.color('input', { variation: 'border' })};
    }

    &:focus {
      background-color: #fff;
    }

    &[data-error='true'] {
      border-color: ${palette.orange[400]};
      color: ${palette.orange[400]};
    }
  }

  @media (${breakpoints.below.phone}) {
    font-size: 14px;
  }
`

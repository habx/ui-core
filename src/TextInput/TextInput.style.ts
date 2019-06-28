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

  background-color: ${palette.darkBlue[200]};
  color: ${palette.darkBlue[700]};

  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: solid 1.5px ${palette.darkBlue[200]};
  border-radius: 4px;

  transition: all 150ms ease-in-out;

  &::placeholder {
    color: #768294;
  }

  &[data-small='true'] {
    padding: 12px;
    min-height: 2.3rem;
    max-height: 2.3rem;
  }

  &:hover,
  &:focus {
    border-color: ${palette.darkBlue[300]};
  }

  &:hover {
    background-color: ${palette.darkBlue[200]};
  }

  &[data-error='true'] {
    border-color: ${palette.orange[400]};
    background-color: #fff;
  }

  &:disabled {
    border-color: #d0e4e6;
    background-color: ${palette.darkBlue[200]};
    color: #d0e4e6;

    &::placeholder {
      color: #d0e4e6;
    }
  }

  @media (${breakpoints.below.phone}) {
    font-size: 14px;
  }
`

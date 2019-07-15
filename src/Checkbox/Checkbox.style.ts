import styled from 'styled-components'

import palette from '../palette'
import theme from '../theme'

export const FakeInputContainer = styled.span`
  display: inline-block;
  position: relative;
`

export const FakeInput = styled.label`
  user-select: none;
  cursor: pointer;
  outline: none;
  display: inline-block;
  width: 21px;
  min-width: 21px;
  height: 21px;
  margin-right: 12px;
  border-radius: 4px;
  background: #fff;
  border: solid 1.5px ${palette.darkBlue[400]};
  transition: all 150ms ease-in-out;

  &:after {
    font-family: habx-icon;
    content: '✔';
    position: absolute;
    top: 0;
    left: 2px;
    font-size: 18px;
    transition: all 150ms ease-in-out;
  }

  &:hover {
    border-width: 3px;
  }
`

export const Input = styled.input`
  align-items: center;
  margin-right: 12px;
  display: none;

  &:not(:checked) + ${FakeInput}:focus {
    border: 4px solid ${theme.color('primary')};
  }

  & + ${FakeInput}:active, &:checked + ${FakeInput}:focus {
    border: 3px solid ${theme.color('primary')};
  }

  &:not(:checked) + ${FakeInput}:after {
    opacity: 0;
    transform: scale(0);
  }

  &:checked + ${FakeInput}:after {
    opacity: 1;
    transform: scale(1);
  }

  &:not([data-background='true']) {
    &:checked + ${FakeInput} {
      border-color: ${theme.color('primary')};
      background-color: ${theme.color('primary')};

      &:hover {
        border-color: ${theme.color('primary', { variation: 'hover' })};
        background-color: ${theme.color('primary', { variation: 'hover' })};
      }

      &:focus {
        border-color: ${theme.color('primary', { variation: 'focus' })};
      }
    }

    & + ${FakeInput}:after {
      color: #fff;
    }
  }

  &[data-background='true'] {
    &:checked + ${FakeInput}:after {
      color: ${theme.color('primary')};
    }
  }

  &[data-error='true'] {
    & + ${FakeInput} {
      border-color: ${palette.orange[400]};
    }

    &:not([data-background='true']) {
      &:checked + ${FakeInput} {
        border-color: ${palette.orange[400]};
        background-color: ${palette.orange[400]};
      }

      & + ${FakeInput}:after {
        color: #fff;
      }
    }

    &[data-background='true'] {
      &:checked + ${FakeInput}:after {
        color: ${palette.orange[400]};
      }
    }
  }

  &:disabled + ${FakeInput}, &:checked:disabled + ${FakeInput} {
    background-color: ${palette.darkBlue[400]};
    border: none;
  }

  &:disabled:checked + ${FakeInput}:after {
    color: #fff;
  }
`

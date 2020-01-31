import styled from 'styled-components'

import Icon from '../Icon'
import palette from '../palette'
import theme from '../theme'

export const FakeInputContainer = styled.span`
  display: inline-block;
  position: relative;
`

export const FakeInput = styled.label`
  --checkbox-diameter: 21px;
  user-select: none;
  cursor: pointer;
  outline: none;
  width: var(--checkbox-diameter);
  min-width: var(--checkbox-diameter);
  height: var(--checkbox-diameter);
  border-radius: 4px;
  background: #fff;
  border: solid 1.5px ${palette.darkBlue[400]};
  transition: all 150ms ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-width: 3px;
  }
`

export const CheckIcon = styled(Icon)`
  transition: all 150ms ease-in-out;
`

export const Input = styled.input`
  align-items: center;
  display: none;

  &:not(:checked) + ${FakeInput}:focus {
    border: 4px solid ${theme.color('primary')};
  }

  & + ${FakeInput}:active, &:checked + ${FakeInput}:focus {
    border: 3px solid ${theme.color('primary')};
  }

  &:not(:checked) + ${FakeInput} ${CheckIcon} {
    opacity: 0;
    transform: scale(0);
  }

  &:checked + ${FakeInput} ${CheckIcon} {
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

    & + ${FakeInput} ${CheckIcon} {
      color: #fff;
    }
  }

  &[data-background='true'] {
    &:checked + ${FakeInput} ${CheckIcon} {
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

      & + ${FakeInput} ${CheckIcon} {
        color: #fff;
      }
    }

    &[data-background='true'] {
      &:checked + ${FakeInput} ${CheckIcon} {
        color: ${palette.orange[400]};
      }
    }
  }

  &:disabled + ${FakeInput}, &:checked:disabled + ${FakeInput} {
    background-color: ${palette.darkBlue[400]};
    border: none;
  }

  &:disabled:checked + ${FakeInput} ${CheckIcon} {
    color: #fff;
  }
`

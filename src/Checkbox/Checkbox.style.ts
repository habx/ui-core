import styled from 'styled-components'

import { transition } from '../animations'
import { Icon } from '../Icon'
import { theme } from '../theme'

export const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;

  &:disabled {
    pointer-events: none;
  }

  &:not(:disabled) {
    cursor: pointer;
  }
`

export const FakeInput = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--checkbox-background-color);
  box-shadow: inset 0 0 0 var(--checkbox-border-width)
    var(--checkbox-border-color);
  border-radius: var(--checkbox-border-radius);
  transition: ${transition('all')};
  pointer-events: none;
`

export const CheckIcon = styled(Icon)`
  opacity: 0;
  transform: scale(0);
  transition: ${transition('all')};
  pointer-events: none;
  color: var(--checkbox-check-color);

  input:checked ~ & {
    opacity: 1;
    transform: scale(1);
  }
`

export const FakeInputContainer = styled.div<{ error?: boolean }>`
  --checkbox-border-radius: 4px;
  --checkbox-size: 21px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--checkbox-size);
  height: var(--checkbox-size);

  --checkbox-border-width: 2px;
  --checkbox-border-color: ${theme.neutralColor(400)};
  --checkbox-background-color: #fff;
  --checkbox-check-color: ${theme.color('primary', { dynamic: true })};

  &[data-small='true'] {
    --checkbox-size: 16px;

    & > ${FakeInput} {
      --checkbox-border-radius: 2px;
    }
  }

  & > input:hover,
  > input:active {
    & + ${FakeInput} {
      --checkbox-border-width: 3px;
    }
  }

  & > input:focus {
    &:checked + ${FakeInput} {
      --checkbox-border-width: 3px;
    }

    &:not(:checked) + ${FakeInput} {
      --checkbox-border-width: 5px;
    }
  }

  &:not([data-background='true']) > input {
    &:not(:disabled) {
      &:active + ${FakeInput}, &:focus + ${FakeInput} {
        --checkbox-border-color: ${theme.color('primary', { dynamic: true })};
      }

      &:checked + ${FakeInput} {
        --checkbox-background-color: ${theme.color('primary', {
          dynamic: true,
        })};
      }

      &:checked:hover + ${FakeInput}, &:checked:focus + ${FakeInput} {
        --checkbox-background-color: ${theme.color('primary', {
          variation: 'loud',
          dynamic: true,
        })};
      }
    }

    & ~ ${CheckIcon} {
      --checkbox-check-color: #fff;
    }
  }

  &[data-background='true'] > input {
    & + ${FakeInput} {
      --checkbox-background-color: ${theme.color('primary', {
        variation: 'contrastText',
        dynamic: true,
      })};
    }

    &:not(:focus):not(:active):not(:hover) + ${FakeInput} {
      --checkbox-border-width: 0;
    }
  }

  & > input:focus + ${FakeInput}, & > input:active + ${FakeInput} {
    --checkbox-border-color: ${theme.color('primary', {
      variation: 'louder',
      dynamic: true,
    })};
  }

  & input:disabled + ${FakeInput}, input:checked:disabled + ${FakeInput} {
    --checkbox-background-color: ${theme.neutralColor(400)};
  }
`

import styled from 'styled-components'

import { transition } from '../animations'
import { Icon } from '../Icon'
import { theme } from '../theme'

export const CheckIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--checkbox-icon-size);
  color: var(--checkbox-check-color);
  transition: ${transition('all')};
  pointer-events: none;
`

export const FakeInput = styled.label`
  flex: 0 0 auto;
  position: relative;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  display: flex;

  width: var(--checkbox-diameter);
  min-width: var(--checkbox-diameter);
  height: var(--checkbox-diameter);
  min-height: var(--checkbox-diameter);
  font-size: var(--checkbox-icon-size);
  border-radius: 4px;

  background-color: var(--checkbox-background-color);
  box-shadow: inset 0 0 0 var(--checkbox-border-width)
      var(--checkbox-border-color),
    0 0 0 var(--checkbox-outline-width) var(--checkbox-outline-color);

  transition: ${transition('all')};

  &:focus {
    --checkbox-outline-width: 4px;
  }
`

export const Input = styled.input`
  display: none;

  & + ${FakeInput} {
    --checkbox-diameter: 22px;
    --checkbox-icon-size: 14px;
  }

  &[data-small='true'] + ${FakeInput} {
    --checkbox-diameter: 16px;
    --checkbox-icon-size: 10px;
  }

  &:checked + ${FakeInput} {
    --checkbox-background-color: ${theme.color('primary')};
    --checkbox-border-color: transparent;
    --checkbox-check-color: ${theme.color('background')};
  }

  &:not(:disabled):hover {
    &:checked + ${FakeInput} {
      --checkbox-background-color: ${theme.color('primary', {
        variation: 'loud',
      })};
    }

    &:not(:checked) + ${FakeInput} {
      --checkbox-border-width: 4px;
    }
  }

  &:not(:disabled):active {
    &:checked + ${FakeInput} {
      --checkbox-background-color: ${theme.color('primary', {
        variation: 'louder',
      })};
    }

    &:not(:checked) + ${FakeInput} {
      --checkbox-border-color: ${theme.color('primary')};
    }
  }

  &:not(:disabled):not(:hover):not(:active)[data-error='true'] {
    &:checked + ${FakeInput}:not(:focus) {
      --checkbox-outline-width: 4px;
      --checkbox-outline-color: ${theme.color('error', { opacity: 0.3 })};
      --checkbox-background-color: ${theme.color('error')};
    }

    &:not(:checked) + ${FakeInput}:not(:focus) {
      --checkbox-outline-width: 4px;
      --checkbox-outline-color: ${theme.color('error', { opacity: 0.3 })};
      --checkbox-border-color: ${theme.color('error')};
    }
  }

  &:disabled {
    pointer-events: none;

    & + ${FakeInput} {
      pointer-events: none;
      --checkbox-background-color: ${theme.neutralColor(300)};
      --checkbox-border-color: ${theme.neutralColor(300)};
    }
  }
`

export const FakeInputContainer = styled.span`
  display: inline-block;
  position: relative;

  --checkbox-background-color: transparent;

  --checkbox-border-width: 2px;
  --checkbox-border-color: ${theme.neutralColor(400)};

  --checkbox-outline-width: 0;
  --checkbox-outline-color: ${theme.color('primary', { opacity: 0.3 })};

  --checkbox-check-color: transparent;
`

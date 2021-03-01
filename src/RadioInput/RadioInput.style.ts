import styled from 'styled-components'

import { transition } from '../animations'
import { theme } from '../theme'

export const InnerCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: var(--radio-inner-circle-diameter);
  width: var(--radio-inner-circle-diameter);
  background-color: var(--radio-inner-circle-color);
  border-radius: 50%;
  transition: ${transition('all')};
`

export const FakeInput = styled.label`
  flex: 0 0 auto;
  position: relative;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  display: flex;

  width: var(--radio-diameter);
  min-width: var(--radio-diameter);
  height: var(--radio-diameter);
  border-radius: 50%;

  background: var(--radio-background-color);
  box-shadow: inset 0 0 0 var(--radio-border-width) var(--radio-border-color),
    0 0 0 var(--radio-outline-width) var(--radio-outline-color);

  transition: ${transition('all')};

  &:focus {
    --radio-outline-width: 4px;
  }
`

export const Input = styled.input`
  display: none;

  & + ${FakeInput} {
    --radio-diameter: 22px;
  }

  &[data-small='true'] + ${FakeInput} {
    --radio-diameter: 12px;
  }

  &:checked + ${FakeInput} {
    --radio-inner-circle-diameter: 12px;
  }

  &:not(:disabled) + ${FakeInput} {
    --radio-border-color: ${theme.color('primary')};
    --radio-inner-circle-color: ${theme.color('primary')};
  }

  &:hover {
    & + ${FakeInput} {
      --radio-border-width: 4px;
    }

    &[data-small='true'] + ${FakeInput} {
      --radio-inner-circle-diameter: 0;
    }

    &:checked + ${FakeInput} {
      --radio-border-color: ${theme.color('primary', { variation: 'louder' })};
    }

    &:not([data-small='true']):not(:active):checked + ${FakeInput} {
      --radio-inner-circle-color: ${theme.color('primary', {
        variation: 'louder',
      })};
      --radio-inner-circle-diameter: 10px;
    }
  }

  &:active {
    &:not(:checked) + ${FakeInput} {
      --radio-border-color: ${theme.color('primary')};
    }

    & + ${FakeInput} {
      --radio-border-width: 3px;
    }

    &[data-small='true'] + ${FakeInput} {
      --radio-inner-circle-diameter: 6px;
    }
  }

  &:not(:disabled):not(:hover):not(:active)[data-error='true'] {
    & + ${FakeInput}:not(:focus) {
      --radio-outline-width: 4px;
      --radio-outline-color: ${theme.color('error', { opacity: 0.3 })};
      --radio-border-color: ${theme.color('error')};
      --radio-inner-circle-color: ${theme.color('error')};
    }
  }

  &:disabled {
    pointer-events: none;

    & + ${FakeInput} {
      pointer-events: none;
      --radio-background-color: ${theme.neutralColor(300)};
      --radio-inner-circle-color: ${theme.neutralColor(300)};
    }
  }
`

export const FakeInputContainer = styled.span`
  display: inline-block;
  position: relative;

  --radio-background-color: transparent;

  --radio-border-width: 2px;
  --radio-border-color: ${theme.neutralColor(400)};

  --radio-outline-width: 0;
  --radio-outline-color: ${theme.color('primary', { opacity: 0.3 })};

  --radio-inner-circle-diameter: 0;
  --radio-inner-circle-color: ${theme.neutralColor(400)};
`

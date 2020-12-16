import styled from 'styled-components'

import { transition } from '../animations/animations'
import { theme } from '../theme'

export const InnerCircle = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  transition: ${transition('all')};
`

export const FakeInput = styled.label`
  user-select: none;
  cursor: pointer;
  outline: none;
  width: var(--radio-input-diameter);
  min-width: var(--radio-input-diameter);
  height: var(--radio-input-diameter);
  border-radius: 50%;
  background: #fff;
  border: solid var(--radio-input-border-width) transparent;
  transition: ${transition('all')};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-width: var(--radio-input-border-width-hover);
  }
`

export const Input = styled.input`
  align-items: center;
  display: none;

  &:not(:checked) + ${FakeInput}:focus {
    border-width: var(--radio-input-border-width-focus);
    border-color: ${theme.color('primary')};
  }

  & + ${FakeInput}:active, &:checked + ${FakeInput}:focus {
    border-width: var(--radio-input-border-width-checked-focus);
    border-color: ${theme.color('primary')};
  }

  &:not(:checked) + ${FakeInput} ${InnerCircle} {
    opacity: 0;
    transform: scale(0);
  }

  &:checked + ${FakeInput} {
    & ${InnerCircle} {
      opacity: 1;
      transform: scale(1);
      background-color: ${theme.color('primary')};
    }

    &:active ${InnerCircle} {
      transform: scale(0.66666);
    }
  }

  &:not([data-background='true']) {
    &:checked + ${FakeInput} {
      border-color: ${theme.color('primary')};

      &:hover {
        border-color: ${theme.color('primary', { variation: 'loud' })};

        & ${InnerCircle} {
          background-color: ${theme.color('primary', { variation: 'loud' })};
        }
      }

      &:focus {
        border-color: ${theme.color('primary', { variation: 'louder' })};
      }
    }
  }

  &:not([data-background='true']):not(:checked):not([data-error='true'])
    + ${FakeInput} {
    border-color: ${theme.neutralColor(400)};
  }

  &[data-error='true'] {
    &:not(:checked) + ${FakeInput} {
      border-color: ${theme.color('error')};
    }

    & + ${FakeInput}:active, &:checked + ${FakeInput}:focus {
      border-color: ${theme.color('error')};
    }

    &:checked + ${FakeInput} {
      & ${InnerCircle} {
        background-color: ${theme.color('error')};
      }
    }

    &:not([data-background='true']) {
      &:checked + ${FakeInput} {
        border-color: ${theme.color('error')};

        &:hover {
          border-color: ${theme.color('error')};

          & ${InnerCircle} {
            background-color: ${theme.color('error', { variation: 'loud' })};
          }
        }

        &:focus {
          border-color: ${theme.color('error', { variation: 'louder' })};
        }
      }
    }
  }

  &:disabled {
    & + ${FakeInput} {
      pointer-events: none;
    }

    &:not(:checked) {
      & + ${FakeInput} {
        background-color: ${theme.neutralColor(400)};
      }
    }

    &:checked {
      & + ${FakeInput} ${InnerCircle} {
        background-color: ${theme.neutralColor(400)};
      }
    }
  }

  &:not([data-background='true']):disabled:checked + ${FakeInput} {
    border-color: ${theme.neutralColor(400)};
  }
`

export const FakeInputContainer = styled.span`
  display: inline-block;
  position: relative;

  --radio-input-diameter: 24px;
  --radio-input-border-width: 2px;
  --radio-input-border-width-hover: 3px;
  --radio-input-border-width-focus: 4px;
  --radio-input-border-width-checked-focus: 3px;

  &[data-small='true'] {
    --radio-input-diameter: 12px;
    --radio-input-border-width: 2px;
    --radio-input-border-width-hover: 4px;
    --radio-input-border-width-checked-focus: var(--radio-input-border-width);
    --radio-input-border-width-focus: var(--radio-input-border-width);

    ${Input}:checked + ${FakeInput} {
      border-width: 0;
    }
  }
`

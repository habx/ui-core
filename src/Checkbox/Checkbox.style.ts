import styled from 'styled-components'

import { Icon } from '../Icon'
import { palette } from '../palette'
import { theme } from '../theme'

export const FakeInputContainer = styled.div`
  --border-radius: 4px;
  --size: 21px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--size);
  height: var(--size);
  color: #fff;

  &[data-small='true'] {
    --border-radius: 2px;
    --size: 16px;
  }

  &[data-background='true'] {
    color: ${theme.color('primary')};

    &[data-error='true'] {
      color: ${theme.color('warning')};
    }
  }
`

export const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;

  & ~ * {
    pointer-events: none;
  }

  :not(:disabled) {
    cursor: pointer;
  }
`

export const FakeInput = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  border: 2px solid ${palette.darkBlue[400]};
  border-radius: var(--border-radius);
  transition: all 150ms ease-in-out;

  input:focus ~ & {
    border-width: 5px;
  }

  input:hover ~ &,
  input:active ~ &,
  input:checked:focus ~ & {
    border-width: 3px;
  }

  input:active ~ &,
  input:focus ~ & {
    border-color: ${theme.color('primary')};
  }

  input:checked ~ & {
    background-color: ${theme.color('primary')};
  }

  input:checked:hover ~ &,
  input:checked:focus ~ & {
    background-color: ${theme.color('primary', { variation: 'hover' })};
  }

  [data-background='true'] > input:checked ~ & {
    background-color: #fff;
  }

  *:not([data-background='true']) > input:checked ~ & {
    border-color: #0000;
  }

  input:checked:focus ~ &,
  input:checked:active ~ & {
    border-color: ${theme.color('primary', { variation: 'focus' })};
  }

  [data-error='true'] > input ~ & {
    border-color: ${theme.color('warning')};
  }

  [data-error='true'] > input:checked:focus ~ &,
  [data-error='true'] > input:checked:active ~ & {
    border-color: ${theme.color('warning', { variation: 'focus' })};
  }

  [data-error='true']:not([data-background='true']) > input:checked ~ & {
    background-color: ${theme.color('warning')};
  }

  [data-error='true']:not([data-background='true']) > input:checked:hover ~ &,
  [data-error='true']:not([data-background='true']) > input:checked:focus ~ & {
    background-color: ${theme.color('warning', { variation: 'hover' })};
  }

  input:disabled ~ &,
  input:checked:disabled ~ & {
    background-color: ${palette.darkBlue[400]};
    border-color: #0000;
  }
`

export const CheckIcon = styled(Icon)`
  opacity: 0;
  transform: scale(0);
  transition: all 150ms ease-in-out;

  input:disabled ~ & {
    color: #fff;
  }

  input:checked ~ & {
    opacity: 1;
    transform: scale(1);
  }
`

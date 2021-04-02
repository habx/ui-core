import styled from 'styled-components'

import { transition } from '../animations'
import { inputStyle } from '../FakeInput'

export const Input = styled.textarea`
  flex: 1;
  margin: 0;
  padding: 12px;
  max-width: 100%;
  min-width: 0;
  height: 14rem;
  resize: vertical;
  width: 100%;

  &[data-small='true'] {
    height: 8rem;
  }

  &::placeholder {
    transition: ${transition('color')};
    color: var(--input-placeholder-color);
  }

  ${inputStyle};
`

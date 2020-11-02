import styled from 'styled-components'

import { theme } from '../theme'

export const HiddenInputContainer = styled.div`
  position: relative;
  display: inline-flex;
  flex: 1;
  width: 100%;
`

export const HideButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 24px;
  color: ${theme.color('primary')};

  &[data-hidden='true'] {
    color: ${theme.color('secondary', { opacity: 0.5 })};
  }
`

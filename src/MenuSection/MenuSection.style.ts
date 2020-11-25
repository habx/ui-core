import styled from 'styled-components'

import { theme } from '../theme'

export const MenuSectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:after,
  &:before {
    content: '';
    height: 1px;
    margin: 4px 0;
    background: ${theme.neutralColor(300)};
  }

  & + &[data-section='true'] {
    &:before {
      display: none;
    }
  }

  &:first-child {
    &:before {
      display: none;
    }
  }

  &:last-child {
    &:after {
      display: none;
    }
  }
`

import styled from 'styled-components'

import { Tab } from '../../Tab'

export const TabSelectOptionContainer = styled(Tab)`
  --tab-border-width: 0;
  flex-grow: 1;
  border: 1px solid var(--tab-border-color);

  &:not(:first-child) {
    border-left: none;
  }

  &:focus:not(:active) {
    z-index: 100;
  }

  &:not(:first-child):not(:last-child) {
    border-radius: 0;
  }

  &:first-child {
    border-radius: 4px 0 0 4px;
  }

  &:last-child {
    border-radius: 0 4px 4px 0;
  }
`

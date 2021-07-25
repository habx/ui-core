import styled from 'styled-components'

import { Tab } from '../../Tab'
import { theme } from '../../theme'

export const TabSelectOptionContainer = styled(Tab)`
  --tab-border-width: 0;
  border: 1px solid var(--tab-border-color);

  &:not(:first-child) {
    border-left: none;
  }

  &:focus:not(:active) {
    --tab-outline-width: 0;
    --tab-color: ${theme.color('primary')};
    --tab-background-color: ${theme.color('primary', {
      variation: 'calmer',
    })};
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

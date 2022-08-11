import styled from 'styled-components'

import { zIndex } from '../../_internal/theme/zIndex'
import { Tab } from '../../Tab'

export const TabSelectOptionContainer = styled(Tab)`
  --tab-border-width: 0;
  margin: 0;
  border: 1px solid var(--tab-border-color);

  &:not(:first-child) {
    border-left: none;
  }

  &:focus:not(:active) {
    z-index: ${zIndex.floatingButtons};
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

import styled from 'styled-components'

import { mixins } from '../mixins'

export const ExpansionPanelContainer = styled.div`
  ${mixins.removeLayoutPadding({ right: true, left: true })};

  &[data-disabled='true'] {
    pointer-events: none;
    opacity: 0.7;
  }
`

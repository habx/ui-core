import styled from 'styled-components'

import { zIndex } from '../_internal/zIndex'
import { animations } from '../animations'
import { breakpoints } from '../breakpoints'

export const ToasterListContainer = styled.div`
  position: fixed;
  bottom: 24px;
  left: calc(50vw - 385px / 2);
  right: calc(50vw - 385px / 2);
  z-index: ${zIndex.notifications};
  display: flex;

  @media (${breakpoints.below.phone}) {
    left: 20px;
    right: 20px;
  }
`

export const ToasterContainer = styled.div`
  position: absolute;
  bottom: 0;

  &:not([data-has-been-frozen='true']) {
    animation: ${animations('emergeSlantFromTop')};
  }

  &[data-closing='true'] {
    animation: ${animations('diveSlant', { duration: 'l' })};
  }
`

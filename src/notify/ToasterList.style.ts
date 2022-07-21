import styled from 'styled-components'

import { zIndex } from '../_internal/theme/zIndex'
import { animations, transition } from '../animations'
import { breakpoints } from '../breakpoints'

export const ToasterListContainer = styled.div`
  position: fixed;
  bottom: 24px;
  left: calc(50vw - 385px / 2);
  right: calc(50vw - 385px / 2);
  z-index: ${zIndex.notifications};
  display: flex;
  flex-direction: column-reverse;

  @media (${breakpoints.below.phone}) {
    left: 20px;
    right: 20px;
  }
`

export const ToasterContainer = styled.div`
  &:not([data-has-been-frozen='true']) {
    animation: ${animations('emergeSlantFromTop')};
  }
  height: auto;
  max-height: 500px;
  overflow: hidden;
  transition: ${transition('all', { duration: 'm' })};
  margin-top: 8px;

  &[data-closing='true'] {
    animation: ${animations('diveSlant', { duration: 'l' })};
    max-height: 0;
    margin-top: 0px;
  }
`

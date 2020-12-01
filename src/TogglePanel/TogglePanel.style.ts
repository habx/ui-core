import styled from 'styled-components'

import { zIndex } from '../_internal/theme/zIndex'
import { animations } from '../animations'

export const Container = styled.div`
  position: fixed;
  opacity: 1;
  z-index: ${zIndex.dropDowns};

  &:not([data-state='opened']) {
    pointer-events: none;

    opacity: 0;
  }

  &[data-state='opening'] {
    animation: ${animations('emerge')};
  }

  &[data-state='closing'] {
    animation: ${animations('diveSlant')};
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.dropDowns};
`

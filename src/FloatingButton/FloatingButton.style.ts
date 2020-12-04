import styled from 'styled-components'

import { zIndex } from '../_internal/theme/zIndex'
import { breakpoints } from '../breakpoints'
import { Button } from '../Button'

export const FloatingButtonContainer = styled(Button)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${zIndex.floatingButtons};
  border-radius: calc(var(--button-height) / 2);

  &[data-fixed='true'] {
    position: fixed;
  }

  &[data-position='bottom'] {
    bottom: 24px;

    @media (${breakpoints.below.phone}) {
      bottom: 12px;
    }
  }

  &[data-position='top'] {
    top: 24px;

    @media (${breakpoints.below.phone}) {
      top: 12px;
    }
  }
`

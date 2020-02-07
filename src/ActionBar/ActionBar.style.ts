import styled from 'styled-components'

import breakpoints from '../breakpoints'
import { ButtonContainer } from '../Button/Button.style'

export const ActionBarContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 72px;

  @media (${breakpoints.below.phone}) {
    &[data-count='1'] {
      height: 60px;
      padding: 0;

      > ${ButtonContainer} {
        height: 100%;
        width: 100%;
      }
    }

    &:not([data-count='1']) {
      justify-content: space-between;
    }
  }

  @media (${breakpoints.above.phone}) {
    & > *:not(:last-child) {
      margin-right: 24px;
    }
  }
`

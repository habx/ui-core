import styled from 'styled-components'

import { CardButton } from '../CardButton'

export const CardButtonWithIllustrationContainer = styled(CardButton)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`

export const CardButtonIllustration = styled.img`
  height: 48px;
  margin-bottom: 12px;

  &[data-disabled='true'] {
    opacity: 0.6;
  }
`

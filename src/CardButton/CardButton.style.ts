import styled from 'styled-components'

import { Card } from '../Card'
import { Text } from '../Text'
import { theme } from '../theme'

export const CardButtonContainer = styled(Card)`
  padding: 24px;
`

export const CardButtonTitle = styled(Text)`
  font-weight: 500;
  line-height: unset;
  color: ${theme.neutralColor(900)};
  margin-bottom: 6px;
`

export const CardButtonDescription = styled(Text)`
  color: ${theme.neutralColor(700)};
  line-height: unset;
`

export const CardButtonIllustration = styled.img`
  height: 36px;
  margin-bottom: 12px;
`

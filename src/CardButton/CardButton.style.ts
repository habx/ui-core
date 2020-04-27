import styled from 'styled-components'

import Card from '../Card'
import palette from '../palette'
import Text from '../Text'

export const CardButtonContainer = styled(Card)`
  padding: 24px;
`

export const CardButtonTitle = styled(Text)`
  font-weight: 500;
  line-height: unset;
  color: ${palette.darkBlue[900]};
  margin-bottom: 6px;
`

export const CardButtonDescription = styled(Text)`
  color: ${palette.darkBlue[700]};
  line-height: unset;
`

export const CardButtonIllustration = styled.img`
  height: 36px;
  margin-bottom: 12px;
`

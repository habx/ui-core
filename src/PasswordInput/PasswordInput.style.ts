import styled from 'styled-components'

import IconButton from '../IconButton'

export const HiddenInputContainer = styled.div`
  position: relative;
  display: inline-flex;
  flex: 1;
  width: 100%;
`

export const HideButton = styled(IconButton)`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translate(0, -50%);
`

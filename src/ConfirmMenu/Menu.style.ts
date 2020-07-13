import styled from 'styled-components'

import DefaultMenu from '../Menu/Menu'

export const Menu = styled(DefaultMenu)`
  margin-top: 48px;
`

export const ConfirmMenuContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
  margin: 0 12px;
`

import styled from 'styled-components'

import { Menu as DefaultMenu } from '../Menu'

export const ConfirmMenuContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
  margin: 0 6px;
`

export const Menu = styled(DefaultMenu)`
  > div {
    padding: 6px 0;
  }
  &[data-textual='true'] {
    > div {
      padding: 12px 0;
    }
    ${ConfirmMenuContent} {
      grid-gap: 24px;
      margin: 0 24px;
    }
  }
`

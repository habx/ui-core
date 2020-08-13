import styled from 'styled-components'

import DefaultMenu from '../Menu/Menu'

export const ConfirmMenuContent = styled.div<{ textual: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
  margin: 0 6px;
`

export const Menu = styled(DefaultMenu)`
  margin-top: 54px;
  margin-left: -81px;
  > div {
    padding: 6px 0;
  }
  &[data-textual='true'] {
    margin-top: 58px;
    margin-left: -204px;
    > div {
      padding: 12px 0;
    }
    ${ConfirmMenuContent} {
      grid-gap: 24px;
      margin: 0 24px;
    }
  }
`

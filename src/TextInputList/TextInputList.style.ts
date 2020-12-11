import styled from 'styled-components'

import { Tag } from '../Tag'

export const TextInputListContainer = styled.div``

export const TagListContainer = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`

export const ElementRightContainer = styled.div`
  display: flex;
  * > {
    margin-left: 12px;
  }
`

export const TextInputListTag = styled(Tag)`
  margin-right: 12px;
`

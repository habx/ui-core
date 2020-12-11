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
  display: flex;
  margin-right: 12px;

  > span {
    font-size: 11px;
    margin-top: 1px;
    margin-left: 4px;
  }
`

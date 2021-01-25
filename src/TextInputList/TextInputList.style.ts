import styled from 'styled-components'

import { IconButton } from '../IconButton'
import { Tag } from '../Tag'

export const TextInputListContainer = styled.div``

export const TagListContainer = styled.div`
  margin: 4px -4px -4px -4px;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`

export const ElementRightContainer = styled.div`
  display: flex;
`

export const TextInputListAddIcon = styled(IconButton)`
  margin-left: 12px;
`

export const TextInputListTag = styled(Tag)`
  margin: 4px;
`

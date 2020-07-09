import styled from 'styled-components'

import TextInput from '../TextInput/TextInput'

export const TextInputListContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`

export const TextInputItem = styled.div`
  position: relative;
  padding: 0 12px 0 8px;
  display: flex;
  align-items: center;

  & > *:not(:first-child) {
    margin-left: 8px;
  }
`

export const Input = styled(TextInput)`
  width: 150px;

  &:not(:first-child) {
    margin-left: 16px;
  }
`
export const TagListContainer = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`

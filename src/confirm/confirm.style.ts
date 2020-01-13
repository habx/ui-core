import styled from 'styled-components'

export const ConfirmFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ConfirmFormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 32px;

  & > *:first-child {
    margin-right: 32px;
  }
`

import styled from 'styled-components'

export const TabsBarContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-inline-start: 0;
  display: flex;
  align-items: center;
  height: 100%;

  & > *:not(:last-child) {
    margin-right: 24px;
  }

  & > a {
    height: 100%;
  }
`

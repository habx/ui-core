import styled from 'styled-components'

export const ExpansionPanelContainer = styled.div`
  &[data-disabled='true'] {
    pointer-events: none;
    opacity: 0.7;
  }
`

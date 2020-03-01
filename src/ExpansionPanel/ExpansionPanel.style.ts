import styled from 'styled-components'

export const ExpansionPanelContainer = styled.div`
  margin: 0 calc(0px - var(--layout-left-padding)) 0
    calc(0px - var(--layout-right-padding));

  &[data-disabled='true'] {
    pointer-events: none;
    opacity: 0.7;
  }
`

import styled from 'styled-components'

export const AlertContainer = styled.div`
  display: grid;
  grid-template-areas: 'stacked-alerts';

  > * {
    grid-area: stacked-alerts;
  }
`

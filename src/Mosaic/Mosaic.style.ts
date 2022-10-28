import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  width: 100%;

  &[data-spacing='true'] {
    gap: 4px;
  }
`

export const MosaicItem = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);

  &[data-items-length='1'] > * {
    display: grid;
    &:nth-child(1) {
      grid-column: 3 / 1;
      grid-row: 3 / 1;
    }
  }

  &[data-items-length='2'] > * {
    display: grid;
    &:nth-child(1) {
      grid-column: 3 / 1;
    }
    &:nth-child(2) {
      grid-column: 3 / 1;
    }
  }

  &[data-items-length='3'] > * {
    &:nth-child(1) {
      grid-column: 3 / 1;
    }
  }

  &[data-items-length='4'] {
    grid-auto-flow: column;
  }

  &[data-spacing='true'] {
    gap: 4px;
  }

  &[data-rounded='true'] > * {
    border-radius: 6px;
  }
`

import styled from 'styled-components'

import { Spacing } from './Mosaic.interface'

export const GridContainer = styled.div<{ spacing?: Spacing }>`
  display: grid;
  grid-auto-flow: column;
  width: 100%;
  gap: ${(props) => props.spacing ?? '0px'};
`

export const MosaicItem = styled.div<{ spacing?: Spacing }>`
  display: grid;
  gap: ${(props) => props.spacing ?? '0px'};
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

import styled from 'styled-components'

import { theme } from '../theme'

export const GridContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  width: 100%;

  &[data-spacing='true'] {
    gap: 4px;
  }
`

export const FavouriteLayout = styled.div`
  position: relative;
  > *:nth-child(1) {
    inset: 0;
    position: absolute;
  }
`

export const IconContainer = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 12px;
  right: 12px;
  background-color: ${theme.neutralColor(200, { opacity: 0.95 })};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    padding: 6px;
    background-color: ${theme.neutralColor(0)};
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

import styled from 'styled-components'

import { palette } from '../palette'
import { Text } from '../Text'
import { theme } from '../theme'

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
`

export const RemainingItemsContainer = styled.div`
  position: relative;
  > * {
    width: 100%;
    height: 100%;
  }
`

export const RemainingItemsOverlay = styled(Text).attrs(() => ({
  type: 'large',
  variation: 'title',
}))`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.color('primary', { variation: 'contrastText' })};
  text-shadow: 0px 0px 20px ${palette.neutralWhiteWithIntensityFading[0]};
`

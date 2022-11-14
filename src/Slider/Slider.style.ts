import styled from 'styled-components'

import { TagContainer } from '../Tag/Tag.style'
import { theme } from '../theme'

import { SliderBarContainer } from './SliderBar/SliderBar.style'

export const SliderContainer = styled.div`
  position: relative;
  margin: 0 4px;
  padding: 16px 0;
  &[data-dot-type='regular'] {
    padding-bottom: 8px;
    padding-top: 32px;
  }
`

export const SliderTooltips = styled.div`
  display: flex;

  &[data-fixed='true'] {
    position: absolute;
    top: 0;

    & > *:not(:last-child) {
      &::after {
        content: '-';
        padding: 0 4px;
      }
    }
  }
`

export const SliderContent = styled.div`
  position: relative;
  cursor: pointer;

  & ${SliderBarContainer}[data-main='true'] {
    background-color: ${theme.color('primary', { dynamic: true })};
  }

  &[data-disabled='true'] {
    opacity: 0.7;
    pointer-events: none;
    filter: grayscale();
    ${TagContainer} {
      color: ${theme.neutralColor(400)};
      background-color: ${theme.color('secondary', { variation: 'calmer' })};
      box-shadow: unset;
    }
  }
`

export const SliderMainBar = styled.div`
  background-color: ${theme.neutralColor(300)};
  position: absolute;
  width: 100%;
  height: 3px;
  border-radius: 2px;
`

export const SliderBackgroundDot = styled.div`
  position: absolute;
  margin-left: -4px;
  z-index: 5;
  cursor: grab;
  width: 4px;
  height: 4px;
  background-color: ${theme.neutralColor(500)};
  box-shadow: ${theme.shadow('lower')};
  touch-action: pan-x;
  border-radius: 50%;
`

export const SliderIndicator = styled.div`
  position: absolute;

  background-color: ${theme.color('warning', {
    dynamic: true,
    valuePropName: 'color',
  })};
  height: 3px;
  border-radius: 8px;
  z-index: 4;
`

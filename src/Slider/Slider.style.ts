import styled from 'styled-components'

import palette from '../palette'
import Text from '../Text'
import theme from '../theme'

import { SliderBarContainer } from './SliderBar/SliderBar.style'
import { SliderDotContainer } from './SliderDot/SliderDot.style'

export const SliderContainer = styled.div`
  position: relative;
  margin: 0 4px;
  padding-top: 32px;
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

export const SliderTooltip = styled(Text)``

export const SliderContent = styled.div`
  position: relative;
  padding: 8px 0;
  cursor: pointer;

  &[data-has-value='true'] ${SliderDotContainer}, & ${SliderBarContainer}[data-main='true'] {
    background-color: ${theme.color('primary', { dynamic: true })};
  }

  &[data-disabled='true'] {
    opacity: 0.7;
    pointer-events: none;
    filter: grayscale();
  }
`

export const SliderMainBar = styled.div`
  background-color: ${palette.darkBlue[300]};
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 2px;
`

export const SliderBackgroundDot = styled.div`
  position: absolute;
  margin-left: -4px;
  margin-top: -2px;
  z-index: 3;
  cursor: grab;
  width: 8px;
  height: 8px;
  background-color: ${palette.darkBlue[500]};
  box-shadow: ${theme.shadow('lower')};
  touch-action: pan-x;
  border-radius: 50%;
`

export const SliderIndicator = styled.div`
  position: absolute;

  background-color: ${theme.color('warning', {
    dynamic: true,
    propName: 'color',
  })};
  height: 4px;
  border-radius: 8px;
  z-index: 4;
`

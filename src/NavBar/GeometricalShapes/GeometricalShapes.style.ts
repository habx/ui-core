import styled from 'styled-components'

import {
  ANIMATION_DURATIONS,
  ANIMATION_TIMING_FUNCTION,
} from '../../animations/animations'

export const GeometricalShapesContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: width ${ANIMATION_DURATIONS.m}ms ${ANIMATION_TIMING_FUNCTION};
  pointer-events: none;

  &[data-expanded='true'] {
    width: 250px;
  }
`

export const LargeBottomShape = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 220px 250px;
  border-color: transparent transparent rgba(255, 255, 255, 0.2) transparent;
`

export const SmallBottomShape = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 120px 120px 0;
  border-color: transparent transparent rgba(255, 255, 255, 0.2) transparent;
`

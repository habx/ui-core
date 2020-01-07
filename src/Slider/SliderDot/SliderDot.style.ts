import styled from 'styled-components'

import theme from '../../theme'

export const SliderDotContainer = styled.div`
  position: absolute;
  z-index: 6;
  cursor: grab;
  box-shadow: ${theme.shadow('lower')};
  border: 2px solid #fff;
  touch-action: pan-x;
  border-radius: 50%;

  --dot-radius: 8px;

  &:hover {
    box-shadow: ${theme.shadow('regular')};
    --dot-radius: 10px;
  }

  &[data-large='true'] {
    --dot-radius: 10px;
  }

  width: calc(var(--dot-radius) * 2);
  height: calc(var(--dot-radius) * 2);
  margin-left: calc(var(--dot-radius) * -1);
  margin-top: calc(var(--dot-radius) * -1 + 2px);
`

export const SliderInnerDot = styled.div`
  margin: 25% auto auto;
  height: 50%;
  width: 50%;
  border-radius: 100%;
`

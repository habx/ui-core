import styled from 'styled-components'

import theme from '../../theme'

export const SliderDotContainer = styled.div`
  position: absolute;
  z-index: 6;
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: center;

  touch-action: pan-x;
  border-radius: 50%;

  --dot-radius: 8px;

  &[data-large='true'] {
    --dot-radius: 10px;

    &:hover {
      --dot-radius: 12px;
    }
  }

  width: calc(var(--dot-radius) * 4);
  height: calc(var(--dot-radius) * 4);
  margin-left: calc(var(--dot-radius) * -2);
  margin-top: calc(var(--dot-radius) * -2 + 2px);
`

export const SliderDotContent = styled.div`
  width: calc(var(--dot-radius) * 2);
  height: calc(var(--dot-radius) * 2);
  box-shadow: ${theme.shadow('low')};
  border: 2px solid #fff;
  border-radius: 50%;
  background-color: #fff;

  &:hover {
    box-shadow: ${theme.shadow('regular')};
    --dot-radius: 10px;
  }

  &:active {
    box-shadow: ${theme.shadow('lower')};
  }
`

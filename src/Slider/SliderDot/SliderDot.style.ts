import styled from 'styled-components'

import theme from '../../theme'

export const SliderDotContainer = styled.div`
  position: absolute;
  z-index: 6;
  cursor: grab;
  box-shadow: ${theme.shadow('low')};
  border: 2px solid #fff;
  touch-action: pan-x;
  border-radius: 50%;
  background-color: #fff;

  --dot-radius: 8px;

  &:hover {
    box-shadow: ${theme.shadow('regular')};
    --dot-radius: 10px;
  }

  &:active {
    box-shadow: ${theme.shadow('lower')};
  }

  &[data-large='true'] {
    --dot-radius: 10px;

    &:hover {
      --dot-radius: 12px;
    }
  }

  width: calc(var(--dot-radius) * 2);
  height: calc(var(--dot-radius) * 2);
  margin-left: calc(var(--dot-radius) * -1);
  margin-top: calc(var(--dot-radius) * -1 + 2px);
`

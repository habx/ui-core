import styled from 'styled-components'

import theme from '../../theme'

export const SliderDotContent = styled.div`
  width: calc(var(--dot-radius) * 2);
  height: calc(var(--dot-radius) * 2);
  box-shadow: ${theme.shadow('low')};
  border: 2px solid #fff;
  border-radius: 50%;
  background-color: ${theme.color('primary', { dynamic: true })};

  &:hover {
    box-shadow: ${theme.shadow('regular')};
  }

  &:active {
    box-shadow: ${theme.shadow('lower')};
  }
`

export const SliderDotContainer = styled.div`
  position: absolute;
  z-index: 6;
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: center;

  touch-action: pan-x;
  border-radius: 50%;

  --dot-radius: 10px;

  &:hover {
    --dot-radius: 12px;
  }

  &[data-large='true'] {
    --dot-radius: 12px;

    &:hover {
      --dot-radius: 14px;
    }
  }

  width: calc(var(--dot-radius) * 3);
  height: calc(var(--dot-radius) * 3);
  margin-left: calc(var(--dot-radius) * -1.5);
  margin-top: calc(var(--dot-radius) * -1.5 + 2px);
`

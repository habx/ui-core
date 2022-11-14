import styled from 'styled-components'

import { Tag as BaseTag } from '../../Tag'
import { theme } from '../../theme'

export const SliderDotContent = styled.div`
  width: calc(var(--dot-radius) * 2);
  height: calc(var(--dot-radius) * 2);
  box-shadow: ${theme.shadow('low')};
  &:not([data-dot-type='tag']) {
    border: 2px solid #fff;
  }
  border-radius: 50%;
  background-color: ${theme.color('primary', { dynamic: true })};

  &:hover {
    box-shadow: ${theme.shadow('low', { hover: true })};
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

  &:active&:not([data-dot-type='tag']) {
    --dot-radius: 12px;
  }

  &[data-large='true']&:not([data-dot-type='tag']) {
    --dot-radius: 12px;

    &:active {
      --dot-radius: 14px;
    }
  }

  width: calc(var(--dot-radius) * 3);
  height: calc(var(--dot-radius) * 3);
  margin-left: calc(var(--dot-radius) * -1.5);
  margin-top: calc(var(--dot-radius) * -1.5 + 2px);

  // Fix color in dark mode
  &[data-dark='true'] button {
    color: ${theme.neutralColor(500)};
  }
`

export const TagContainer = styled.div`
  position: absolute;
  &:active {
    transform: translateY(-100%);
  }
`

export const Tag = styled(BaseTag)`
  background-color: ${theme.color('primary', {
    variation: 'calmer',
  })};
  color: ${theme.color('primary')};
  box-shadow: unset;

  &:active {
    background-color: ${theme.color('primary')};
    color: ${theme.neutralColor(0)};
    border-color: transparent;
  }

  &:hover {
    background-color: ${theme.color('primary')};
    color: ${theme.neutralColor(0)};
    border-color: transparent;
  }
`

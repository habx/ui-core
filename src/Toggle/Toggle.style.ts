import styled from 'styled-components'

import palette from '../palette'
import theme from '../theme'

export const ToggleContainer = styled.div`
  width: calc(var(--toggle-selected-circle-radius) * 2.5);
  height: calc(var(--toggle-selected-circle-radius) / 2);
  background-color: ${theme.color('secondary')};
  transition: all 150ms ease-in-out;
  position: relative;
  cursor: pointer;
  margin: calc(var(--toggle-selected-circle-radius) * 2)
    var(--toggle-selected-circle-radius);

  --toggle-not-selected-circle-radius: 6px;
  --toggle-selected-circle-radius: 8px;

  --toggle-circle-radius: var(--toggle-not-selected-circle-radius);

  &::before {
    content: '';
    transition: all 150ms ease-in-out;
    box-shadow: ${theme.shadow('lower')};
    background-color: inherit;
    position: absolute;
    top: calc(
      0px - var(--toggle-circle-radius) + var(--toggle-selected-circle-radius) /
        4
    );
    left: calc(0px - var(--toggle-circle-radius));
    height: calc(2 * var(--toggle-circle-radius));
    width: calc(2 * var(--toggle-circle-radius));
    border-radius: var(--toggle-circle-radius);
  }

  &:hover {
    &::before {
      box-shadow: ${theme.shadow('low')};
    }
  }

  &:active {
    &::before {
      box-shadow: unset;
    }
  }

  &[data-selected='true'] {
    background-color: ${theme.color('primary')};
    --toggle-circle-radius: var(--toggle-selected-circle-radius);

    &::before {
      left: calc(100% - var(--toggle-circle-radius));
    }
  }

  &[data-error='true'] {
    background-color: ${theme.color('warning')};
  }

  &[data-disabled='true'] {
    background-color: ${palette.darkBlue[400]};
  }

  &[data-large='true'] {
    --toggle-not-selected-circle-radius: 10px;
    --toggle-selected-circle-radius: 13px;
  }
`

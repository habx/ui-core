import styled from 'styled-components'

import { transition } from '../animations'
import { theme } from '../theme'

export const FakeInput = styled.label`
  width: var(--toggle-bar-width);
  height: var(--toggle-bar-height);
  border-radius: var(--toggle-bar-height);

  background-color: var(--toggle-bar-background-color);
  transition: ${transition('all')};
  cursor: pointer;

  outline: none;
  flex: 0 0 auto;

  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: var(--toggle-circle-x-position);
    height: calc(2 * var(--toggle-circle-radius));
    width: calc(2 * var(--toggle-circle-radius));
    border-radius: var(--toggle-circle-radius);

    background-color: var(--toggle-circle-background-color);
    box-shadow: inset 0 0 0 var(--toggle-circle-border-width)
        var(--toggle-circle-border-color),
      0 0 0 var(--toggle-circle-outline-width)
        var(--toggle-circle-outline-color),
      var(--toggle-circle-shadow);

    transition: ${transition('all')};
  }

  &:focus {
    --toggle-circle-outline-width: 4px;
  }
`

export const Input = styled.input`
  display: none;

  &:not(:checked) {
    &:hover:not(:active) + ${FakeInput} {
      --toggle-bar-background-color: ${theme.neutralColor(700)};
      --toggle-circle-shadow: ${theme.shadow('regular')};
    }

    &:active + ${FakeInput} {
      --toggle-bar-background-color: ${theme.neutralColor(700)};
      --toggle-circle-shadow: ${theme.shadow('low')};
    }

    &:disabled + ${FakeInput} {
      pointer-events: none;
      --toggle-bar-background-color: ${theme.neutralColor(300, {
        gradient: 'withIntensityFading',
      })};
      --toggle-circle-background-color: ${theme.neutralColor(300, {
        gradient: 'withIntensityFading',
      })};
      --toggle-circle-border-color: ${theme.neutralColor(0, {
        gradient: 'withIntensityFading',
      })};
      --toggle-circle-border-width: 2px;
    }
  }

  &:checked {
    & + ${FakeInput} {
      --toggle-bar-background-color: ${theme.color('primary', {
        variation: 'calm',
      })};
      --toggle-circle-background-color: ${theme.color('primary')};

      --toggle-circle-x-position: calc(100% - var(--toggle-circle-radius) * 2);
      --toggle-circle-border-width: 0;
    }

    &:hover:not(:active) + ${FakeInput} {
      --toggle-circle-background-color: ${theme.color('primary', {
        variation: 'loud',
      })};
      --toggle-circle-shadow: ${theme.shadow('regular')};
    }

    &:active + ${FakeInput} {
      --toggle-circle-shadow: ${theme.shadow('low')};
    }

    &:disabled + ${FakeInput} {
      pointer-events: none;
      --toggle-bar-background-color: ${theme.neutralColor(300, {
        gradient: 'withIntensityFading',
      })};
      --toggle-circle-background-color: ${theme.color('primary', {
        variation: 'loud',
      })};
      --toggle-circle-border-color: ${theme.neutralColor(0, {
        gradient: 'withIntensityFading',
      })};
      --toggle-circle-border-width: 2px;
    }
  }

  &:not(:disabled):not(:hover):not(:active)[data-error='true'] {
    &:checked + ${FakeInput}:not(:focus) {
      --toggle-circle-outline-width: 4px;
      --toggle-circle-outline-color: ${theme.color('error', { opacity: 0.3 })};
      --toggle-circle-background-color: ${theme.color('error')};
      --toggle-bar-background-color: ${theme.color('error', {
        variation: 'calm',
      })};
    }

    &:not(:checked) + ${FakeInput}:not(:focus) {
      --toggle-circle-outline-width: 4px;
      --toggle-circle-outline-color: ${theme.color('error', { opacity: 0.3 })};
    }
  }
`

export const FakeInputContainer = styled.span`
  display: inline-flex;
  align-items: center;
  position: relative;
  height: calc(var(--toggle-circle-radius) * 2);
  width: calc(var(--togle-bar-width) + var(--toggle-circle-overflow) * 2);
  padding: 0 var(--toggle-circle-overflow);

  --toggle-bar-width: 38px;
  --toggle-bar-height: 16px;
  --toggle-bar-background-color: ${theme.neutralColor(500)};

  --toggle-circle-radius: 11px;
  --toggle-circle-background-color: ${theme.neutralColor(0, {
    gradient: 'withIntensityFading',
  })};
  --toggle-circle-border-width: 1px;
  --toggle-circle-border-color: ${theme.neutralColor(300)};
  --toggle-circle-outline-width: 0;
  --toggle-circle-outline-color: ${theme.color('primary', { opacity: 0.3 })};
  --toggle-circle-shadow: ${theme.shadow('lower')};
  --toggle-circle-overflow: 3px;
  --toggle-circle-x-position: 0;
`

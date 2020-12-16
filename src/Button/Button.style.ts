import styled from 'styled-components'

import { ANIMATION_DURATIONS, ANIMATION_TIMING_FUNCTION } from '../animations'
import { fontScale } from '../fontScale'
import { theme } from '../theme'

import { ButtonModes } from './Button.interface'

export const SideElementContainer = styled.div`
  font-size: 24px;
  display: flex;

  &[data-position='left'] {
    margin-right: var(--button-side-element-margin);
  }

  &[data-position='right'] {
    margin-left: var(--button-side-element-margin);
  }
`

export const ButtonContent = styled.div`
  position: relative;
  white-space: nowrap;
`

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  user-select: none;
  vertical-align: middle;
  text-align: left;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  position: relative;

  max-width: 100%;
  font-family: ${theme.font()};
  letter-spacing: 0.1px;
  border: none;

  transition-property: box-shadow, background-color;
  transition-duration: ${ANIMATION_DURATIONS.m}ms;
  transition-timing-function: ${ANIMATION_TIMING_FUNCTION};

  box-shadow: var(--button-shadow),
    inset 0 0 0 var(--button-border-width) var(--button-border-color),
    0 0 0 var(--button-outline-width) var(--button-outline-color);

  height: var(--button-height);

  --button-border-width: 0;
  --button-border-color: ${theme.color('secondary', { dynamic: true })};
  --button-outline-width: 0;
  --button-outline-color: ${theme.color('primary', { opacity: 0.3 })};
  --button-shadow: 0 0 0 ${theme.neutralColor(1000)};
  --button-height: 48px;

  &:not([data-small='true']) {
    font-size: ${fontScale.moon.size}px;
    padding: 0 24px;
    --button-side-element-margin: 10px;
  }

  &[data-small='true'] {
    font-size: ${fontScale.pluto.size}px;
    padding: 0 12px;
    --button-height: 36px;
    --button-side-element-margin: 8px;

    & ${SideElementContainer} {
      font-size: 20px;
    }
  }

  &[data-mode='${ButtonModes.solid}'] {
    background-color: ${theme.color('primary', { dynamic: true })};
    color: ${theme.color('primary', {
      variation: 'contrastText',
      dynamic: true,
    })};

    &:hover {
      background-color: ${theme.color('primary', {
        dynamic: true,
        variation: 'loud',
      })};
    }

    &:active {
      background-color: ${theme.color('primary', {
        dynamic: true,
        variation: 'louder',
      })};
    }

    &:focus:not(:active) {
      --button-outline-width: 4px;
    }

    &:not(:focus):not(:active) {
      --button-shadow: ${theme.shadow('lower')};
    }

    &[data-loading='true'] {
      background: ${theme.color('primary', {
        dynamic: true,
        variation: 'loud',
      })};
      cursor: initial;
      pointer-events: none;
    }

    &:disabled {
      background-color: ${theme.neutralColor(300)};
      color: ${theme.textColor({ variation: 'lowContrast' })};
    }
  }

  &[data-mode='${ButtonModes.outline}'] {
    --button-border-width: 2px;

    background-color: transparent;
    color: ${theme.color('secondary', { dynamic: true })};

    &:hover:not(:focus) {
      --button-border-width: 4px;
    }

    &:active {
      --button-border-width: 3px;
    }

    &:focus:not(:active) {
      --button-outline-width: 4px;
    }

    &:disabled {
      color: ${theme.neutralColor(300)};

      --button-border-color: ${theme.neutralColor(300)};
    }
  }

  &[data-mode='${ButtonModes.ghost}'] {
    background-color: transparent;
    color: ${theme.color('primary', { dynamic: true })};
    padding: 0 12px;

    &:focus:not(:active) {
      --button-outline-width: 4px;
    }

    &:disabled {
      background-color: ${theme.neutralColor(300)};
      color: ${theme.textColor({ variation: 'lowContrast' })};
    }

    &:hover,
    &:active {
      background-color: ${theme.neutralColor(100)};
    }
  }

  &[data-mode='${ButtonModes.link}'] {
    display: inline-flex;
    background-color: transparent;
    padding: 0;
    color: ${theme.color('primary', { dynamic: true })};
    height: unset;

    &:hover {
      color: ${theme.color('primary', { dynamic: true, variation: 'loud' })};
    }

    &:active {
      color: ${theme.color('primary', { dynamic: true, variation: 'louder' })};
    }

    &:focus:not(:active) {
      --button-outline-width: 4px;
    }

    &:disabled {
      color: ${theme.color('secondary', {
        variation: 'louder',
        opacity: 0.45,
      })};
    }

    & ${ButtonContent} {
      border-bottom: 2px solid currentColor;
      margin: 2px 0;
    }
  }

  &[data-full-width='true'] {
    width: 100%;
  }

  &:disabled {
    pointer-events: none;
  }
`

export const ButtonLoadingContainer = styled.div`
  position: relative;
`

import styled, { css } from 'styled-components'

import { transition } from '../animations'
import { fontScale } from '../fontScale'
import { Icon } from '../Icon'
import { theme } from '../theme'

export const inputStyle = css`
  font-family: ${theme.font()};
  font-size: var(--text-input-font-size);
  outline: none;
  border: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 4px;
  background-color: var(--text-input-background-color);

  box-shadow: inset 0 0 0 var(--text-input-border-width)
      var(--text-input-border-color),
    0 0 0 var(--text-input-outline-width) var(--text-input-outline-color);

  color: var(--text-input-color);

  &::placeholder {
    transition: ${transition('color')};
    color: var(--text-input-placeholder-color);
  }

  --text-input-border-width: 0;
  --text-input-font-size: ${fontScale.moon.size}px;
  --text-input-border-color: ${theme.neutralColor(300)};
  --text-input-outline-width: 0;
  --text-input-outline-color: ${theme.color('primary', { opacity: 0.3 })};
  --text-input-background-color: ${theme.color('background')};
  --text-input-color: ${theme.textColor()};
  --text-input-placeholder-color: ${theme.textColor({
    variation: 'lowContrast',
  })};

  transition: ${transition('all')};

  max-width: 100%;
  min-width: 0;
  width: 100%;

  &[data-small='true'] {
    padding: 0 12px;
    min-height: 36px;
    max-height: 36px;
    --text-input-font-size: ${fontScale.pluto.size}px;
  }

  &[data-tiny='true'] {
    min-height: 24px;
    max-height: 24px;
    --text-input-font-size: ${fontScale.asteroid.size}px;
  }

  &:not([data-light='true']) {
    --text-input-background-color: ${theme.neutralColor(200, {
      gradient: 'withIntensityFading',
    })};

    &:disabled,
    &[data-disabled='true'] {
      --text-input-color: ${theme.neutralColor(500)};
      pointer-events: none;

      --text-input-placeholder-color: ${theme.neutralColor(300)};
    }

    &:hover {
      --text-input-color: ${theme.neutralColor(900)};
      --text-input-placeholder-color: ${theme.neutralColor(900)};
    }

    &:active {
      --text-input-border-width: 1px;
      --text-input-background-color: ${theme.color('background')};
    }

    &:focus-within,
    &[data-open='true'],
    &[data-focused='true'] {
      --text-input-border-width: 0;
      --text-input-outline-width: 4px;
      --text-input-background-color: ${theme.color('background')};
    }

    &[data-background='true'] {
      --text-input-background-color: ${theme.neutralColor(100, {
        gradient: 'withIntensityFading',
      })};
      --text-input-border-color: ${theme.neutralColor(300)};
    }

    &[data-error='true'] {
      --text-input-outline-color: ${theme.color('error', { opacity: 0.2 })};
      --text-input-outline-width: 4px;
      --text-input-border-color: ${theme.color('error')};
      --text-input-border-width: 1px;
    }
  }

  &[data-bare='true'] {
    --text-input-border-width: 1px;
    --text-input-border-color: ${theme.neutralColor(300)};
    --text-input-background-color: ${theme.color('background')};
  }

  &[data-light='true'] {
    --text-input-color: ${theme.color('primary')};
    font-size: 18px;
    padding-left: 12px;
    padding-right: 12px;

    &:hover:not(:focus-within) {
      --text-input-background-color: ${theme.neutralColor(200, {
        gradient: 'withIntensityFading',
      })};
    }

    &:focus-within {
      --text-input-border-width: 1px;
      --text-input-color: ${theme.textColor()};
    }
  }

  &[data-error='true'] {
    color: ${theme.color('error')};
  }

  &:disabled {
    pointer-events: none;
  }
`

export const SideElementContainer = styled.div`
  font-size: 18px;
  height: 100%;
  display: flex;
  align-items: center;
  color: var(--text-input-placeholder-color);

  &[data-position='left'] {
    margin-right: 8px;
  }

  &[data-position='right'] {
    margin-left: 8px;
  }
`

export const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  align-self: stretch;
  flex: 1 1 100%;
  color: var(--text-input-color);
  font-family: ${theme.font()};
  font-size: var(--text-input-font-size);

  transition: ${transition('all')};

  &::placeholder {
    transition: ${transition('color')};
    color: var(--text-input-placeholder-color);
  }
`

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 12px;
  max-height: 48px;
  min-height: 48px;

  ${inputStyle};
`

export const IconButton = styled(Icon)`
  &:hover {
    cursor: pointer;
  }
`

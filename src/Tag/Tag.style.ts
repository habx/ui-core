import styled from 'styled-components'

import { ANIMATION_DURATIONS, ANIMATION_TIMING_FUNCTION } from '../animations'
import { theme } from '../theme'

export const TagContainer = styled.button`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  user-select: none;
  vertical-align: middle;
  text-align: left;
  text-decoration: none;
  font-family: ${theme.font()};
  line-height: 1;
  border-radius: calc(var(--tag-height) / 2);
  border: unset;

  transition-property: box-shadow, background-color;
  transition-duration: ${ANIMATION_DURATIONS.m}ms;
  transition-timing-function: ${ANIMATION_TIMING_FUNCTION};

  padding: 0 var(--tag-horizontal-padding);
  height: var(--tag-height);
  --tag-horizontal-padding: 12px;
  --tag-height: 36px;
  font-size: 14px;

  &[data-small='true'] {
    --tag-horizontal-padding: 8px;
    --tag-height: 24px;
    font-size: 12px;
  }

  &[data-large='true'] {
    --tag-horizontal-padding: 24px;
    --tag-height: 48px;
    font-size: 16px;
  }

  /*
   * Colors
   */
  box-shadow: inset 0 0 0 var(--tag-border-width) var(--tag-border-color),
    0 0 0 var(--tag-outline-width) var(--tag-outline-color);
  color: var(--tag-color);
  --tag-border-width: 0;
  --tag-border-color: transparent;
  --tag-outline-width: 0;
  --tag-outline-color: ${theme.color('primary', { opacity: 0.3 })};
  --tag-color: ${theme.textColor()};

  &:not([data-interactive='true']) {
    --tag-color: ${theme.color('secondary', { dynamic: true })};
    background-color: ${theme.color('secondary', {
      variation: 'calmer',
      dynamic: true,
    })};
  }

  &[data-interactive='true'] {
    cursor: pointer;
    background-color: transparent;
    --tag-border-width: 1px;
    --tag-border-color: ${theme.neutralColor(300)};

    &[data-active='true'] {
      background-color: ${theme.color('primary', { variation: 'calmer' })};
      --tag-border-color: transparent;
    }

    &:not([data-active='true']) {
      &:hover {
        background-color: ${theme.neutralColor(200)};
        --tag-border-color: transparent;
      }

      &:focus:not(:active) {
        --tag-outline-width: 4px;
      }
    }
  }

  &[data-active='true'] {
    --tag-color: ${theme.color('primary')};
    background-color: ${theme.color('primary', { variation: 'calm' })};
  }

  &:disabled {
    color: ${theme.neutralColor(300)};
    pointer-events: none;

    &[data-background='true'] {
      --tag-color: ${theme.neutralColor(200)};
      --tag-border-color: ${theme.neutralColor(200)};
    }
  }
`

export const SideElementContainer = styled.div`
  font-size: 0.9em;
  display: flex;
  margin-top: 1px;

  &[data-position='left'] {
    margin-right: 6px;
  }

  &[data-position='right'] {
    margin-left: 6px;
  }
`

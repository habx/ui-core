import styled from 'styled-components'

import { ANIMATION_DURATIONS, ANIMATION_TIMING_FUNCTION } from '../animations'
import { theme } from '../theme'

export const TagContainer = styled.button`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  user-select: none;
  vertical-align: middle;

  /*
   * Font
   */
  text-align: left;
  text-decoration: none;
  font-family: ${theme.font()};
  font-size: var(--tag-font-size);
  line-height: 1;

  /*
   * Dimensions
   */
  border-radius: calc(var(--tag-height) / 2);
  padding: 0 var(--tag-horizontal-padding);
  height: var(--tag-height);

  --tag-horizontal-padding: 12px;
  --tag-height: 36px;
  --tag-side-element-internal-margin: 6px;
  --tag-side-element-external-margin: -2px;
  --tag-font-size: 14px;

  &[data-small='true'] {
    --tag-horizontal-padding: 8px;
    --tag-height: 24px;
    --tag-side-element-internal-margin: 4px;
    --tag-side-element-external-margin: 0;
    --tag-font-size: 12px;
  }

  &[data-large='true'] {
    --tag-horizontal-padding: 24px;
    --tag-height: 48px;
    --tag-side-element-internal-margin: 8px;
    --tag-side-element-external-margin: -4px;
    --tag-font-size: 16px;
  }

  /*
   * Colors
   */
  transition-property: box-shadow, background-color;
  transition-duration: ${ANIMATION_DURATIONS.m}ms;
  transition-timing-function: ${ANIMATION_TIMING_FUNCTION};

  box-shadow: inset 0 0 0 var(--tag-border-width) var(--tag-border-color),
    0 0 0 var(--tag-outline-width) var(--tag-outline-color);
  color: var(--tag-color);
  background-color: var(--tag-background-color);

  --tag-border-width: 0;
  --tag-border-color: transparent;
  --tag-outline-width: 0;
  --tag-outline-color: ${theme.color('primary', { opacity: 0.3 })};
  --tag-color: ${theme.textColor()};
  --tag-background-color: transparent;

  &:not([data-interactive='true']) {
    --tag-color: ${theme.color('secondary', { dynamic: true })};
    --tag-background-color: ${theme.color('secondary', {
      variation: 'calmer',
      dynamic: true,
    })};
  }

  &[data-interactive='true'] {
    cursor: pointer;
    --tag-border-width: 1px;
    --tag-border-color: ${theme.neutralColor(300)};

    &[data-active='true'] {
      --tag-background-color: ${theme.color('primary', {
        variation: 'calmer',
      })};
      --tag-color: ${theme.color('primary')};
      --tag-border-color: transparent;
    }

    &:hover {
      --tag-background-color: ${theme.neutralColor(200)};
      --tag-color: ${theme.textColor()};
      --tag-border-color: transparent;
    }

    &:focus:not(:active) {
      --tag-outline-width: 4px;
    }
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

export const TagContent = styled.div`
  position: relative;
  white-space: nowrap;
`

export const SideElementContainer = styled.div`
  display: flex;

  &[data-position='left'] {
    margin-right: var(--tag-side-element-internal-margin);
    margin-left: var(--tag-side-element-external-margin);
  }

  &[data-position='right'] {
    margin-right: var(--tag-side-element-external-margin);
    margin-left: var(--tag-side-element-internal-margin);
  }
`

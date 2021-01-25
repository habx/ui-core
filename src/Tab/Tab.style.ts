import styled from 'styled-components'

import { ANIMATION_DURATIONS, ANIMATION_TIMING_FUNCTION } from '../animations'
import { theme } from '../theme'

export const TabContainer = styled.button`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  user-select: none;
  vertical-align: middle;
  cursor: pointer;

  /*
   * Font
   */
  text-align: left;
  text-decoration: none;
  font-family: ${theme.font()};
  font-size: var(--tab-font-size);
  line-height: 1;

  /*
   * Dimensions
   */
  border-radius: 4px;
  padding: 0 var(--tab-horizontal-padding);
  height: var(--tab-height);

  --tab-horizontal-padding: 12px;
  --tab-height: 36px;
  --tab-side-element-internal-margin: 6px;
  --tab-side-element-external-margin: -2px;
  --tab-font-size: 14px;

  &[data-small='true'] {
    --tab-horizontal-padding: 8px;
    --tab-height: 24px;
    --tab-side-element-internal-margin: 4px;
    --tab-side-element-external-margin: 0;
    --tab-font-size: 12px;
  }

  &[data-large='true'] {
    --tab-horizontal-padding: 24px;
    --tab-height: 48px;
    --tab-side-element-internal-margin: 8px;
    --tab-side-element-external-margin: -4px;
    --tab-font-size: 16px;
  }

  /*
   * Colors
   */
  transition-property: box-shadow, background-color;
  transition-duration: ${ANIMATION_DURATIONS.m}ms;
  transition-timing-function: ${ANIMATION_TIMING_FUNCTION};

  box-shadow: inset 0 0 0 var(--tab-border-width) var(--tab-border-color),
    0 0 0 var(--tab-outline-width) var(--tab-outline-color);
  color: var(--tab-color);
  background: var(--tab-background-color);

  --tab-border-width: 1px;
  --tab-border-color: ${theme.neutralColor(300, {
    gradient: 'withIntensityFading',
  })};
  --tab-outline-width: 0;
  --tab-outline-color: ${theme.color('primary', { opacity: 0.3 })};
  --tab-color: ${theme.textColor()};
  --tab-background-color: ${theme.neutralColor(0, {
    gradient: 'withIntensityFading',
  })};

  &[data-active='true'] {
    --tab-color: ${theme.color('primary')};
    --tab-background-color: ${theme.color('primary', { variation: 'calmer' })};
    --tab-border-width: 0;
  }

  &:hover {
    --tab-background-color: ${theme.neutralColor(200)};
    --tab-color: ${theme.textColor()};
    --tab-border-color: transparent;
  }

  &:focus:not(:active) {
    --tab-outline-width: 4px;
  }

  &:disabled {
    pointer-events: none;

    --tab-color: ${theme.neutralColor(300, {
      gradient: 'withIntensityFading',
    })};
    --tab-border-color: ${theme.neutralColor(300, {
      gradient: 'withIntensityFading',
    })};
    --tab-background-color: ${theme.color('background')};
  }
`

export const TabContent = styled.div`
  position: relative;
  white-space: nowrap;
`

export const SideElementContainer = styled.div`
  display: flex;

  &[data-position='left'] {
    margin-right: var(--tab-side-element-internal-margin);
    margin-left: var(--tab-side-element-external-margin);
  }

  &[data-position='right'] {
    margin-right: var(--tab-side-element-external-margin);
    margin-left: var(--tab-side-element-internal-margin);
  }
`

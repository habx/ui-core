import styled, { css } from 'styled-components'

import { ANIMATION_DURATIONS, ANIMATION_TIMING_FUNCTION } from '../animations'
import { fontScale } from '../fontScale'
import { theme } from '../theme'

export const TabContainer = styled.button<{ $tiny: boolean }>`
  ${(props) =>
    props.$tiny &&
    css`
      --tab-padding-inline: 6px;
      --tab-height: 18px;
      --tab-gap: 2px;
      --tab-side-element-external-margin: 0;
      --tab-font-size: ${fontScale.asteroid.size}px;
    `}

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
  font-size: var(--tab-font-size, ${fontScale.pluto.size}px);
  line-height: var(--tab-height, 36px);

  /*
   * Dimensions
   */
  border-radius: 4px;
  padding-inline: var(--tab-padding-inline, 12px);

  &[data-small='true'] {
    --tab-padding-inline: 8px;
    --tab-height: 24px;
    --tab-gap: 4px;
    --tab-side-element-external-margin: 0;
    --tab-font-size: ${fontScale.asteroid.size}px;
  }

  &[data-large='true'] {
    --tab-padding-inline: 24px;
    --tab-height: 48px;
    --tab-gap: 8px;
    --tab-side-element-external-margin: -6px;
    --tab-font-size: ${fontScale.moon.size}px;
  }

  /*
   * Colors
   */
  transition-property: box-shadow, background-color;
  transition-duration: ${ANIMATION_DURATIONS.m}ms;
  transition-timing-function: ${ANIMATION_TIMING_FUNCTION};

  box-shadow: inset 0 0 0 var(--tab-border-width, 1px)
      var(
        --tab-border-color,
        ${theme.neutralColor(300, {
          gradient: 'withIntensityFading',
        })}
      ),
    0 0 0 var(--tab-outline-width, 0)
      var(--tab-outline-color, ${theme.color('primary', { opacity: 0.3 })});
  color: var(--tab-color, ${theme.textColor()});
  background: var(
    --tab-background-color,
    ${theme.neutralColor(0, {
      gradient: 'withIntensityFading',
    })}
  );

  &[data-active='true'] {
    --tab-color: ${theme.color('primary')};
    --tab-background-color: ${theme.color('primary', { variation: 'calmer' })};
    --tab-border-width: 0;
  }

  &:hover {
    --tab-background-color: ${theme.neutralColor(200, {
      gradient: 'withIntensityFading',
    })};
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
    margin-right: var(--tab-gap, 6px);
    margin-left: var(--tab-side-element-external-margin, -2px);
  }

  &[data-position='right'] {
    margin-right: var(--tab-side-element-external-margin, -2px);
    margin-left: var(--tab-gap, 6px);
  }
`

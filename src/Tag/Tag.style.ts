import styled, { css } from 'styled-components'

import { ANIMATION_DURATIONS, ANIMATION_TIMING_FUNCTION } from '../animations'
import { fontScale } from '../fontScale'
import { theme } from '../theme'

export const TagContainer = styled.div<{ $tiny: boolean }>`
  ${(props) =>
    props.$tiny &&
    css`
      --tag-padding-inline: 6px;
      --tag-height: 18px;
      --tag-gap: 2px;
      --tag-side-element-external-margin: 0;
      --tag-font-size: ${fontScale.asteroid.size}px;
    `}

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
  font-size: var(--tag-font-size, ${fontScale.pluto.size}px);
  line-height: var(--tag-height, 36px);

  /*
   * Dimensions
   */
  border-radius: calc(var(--tag-height, 36px) / 2);
  padding-inline: var(--tag-padding-inline, 12px);

  &[data-small='true'] {
    --tag-padding-inline: 8px;
    --tag-height: 24px;
    --tag-gap: 4px;
    --tag-side-element-external-margin: 0;
    --tag-font-size: ${fontScale.asteroid.size}px;
  }

  &[data-large='true'] {
    --tag-padding-inline: 24px;
    --tag-height: 48px;
    --tag-gap: 8px;
    --tag-side-element-external-margin: -6px;
    --tag-font-size: ${fontScale.moon.size}px;
  }

  /*
   * Colors
   */
  transition-property: box-shadow, background-color;
  transition-duration: ${ANIMATION_DURATIONS.m}ms;
  transition-timing-function: ${ANIMATION_TIMING_FUNCTION};

  box-shadow: inset 0 0 0 var(--tag-border-width, 0)
      var(--tag-border-color, transparent),
    0 0 0 var(--tag-outline-width, 0)
      var(--tag-outline-color, ${theme.color('primary', { opacity: 0.3 })});
  color: var(--tag-color, ${theme.textColor()});
  background-color: var(--tag-background-color, transparent);

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
    margin-right: var(--tag-gap, 6px);
    margin-left: var(--tag-side-element-external-margin, -2px);
  }

  &[data-position='right'] {
    margin-right: var(--tag-side-element-external-margin, -2px);
    margin-left: var(--tag-gap, 6px);
  }
`

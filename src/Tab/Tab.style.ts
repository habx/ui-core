import styled from 'styled-components'

import { transition } from '../animations'
import { theme } from '../theme'

export const TabContainer = styled.button`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  user-select: none;
  vertical-align: middle;
  text-align: left;
  text-decoration: none;
  border: none;
  border-radius: 4px;

  font-family: ${theme.font()};
  font-weight: 500;
  line-height: 1;
  transition: ${transition('background-color', { duration: 's' })};

  color: var(--tab-color);
  background: var(--tab-background-color);
  box-shadow: inset 0 0 0 var(--tab-border-width) var(--tab-border-color);

  --tab-color: ${theme.textColor()};
  --tab-background-color: ${theme.neutralColor(0, {
    gradient: 'withIntensityFading',
  })};
  --tab-border-color: ${theme.neutralColor(300, {
    gradient: 'withIntensityFading',
  })};
  --tab-border-width: 1px;

  padding: 0 12px;
  height: 28px;
  font-size: 12px;

  &[data-large='true'] {
    padding: 0 24px;
    height: 48px;
    font-size: 16px;
  }

  &:not(:disabled) {
    &:hover {
      --tab-border-width: 3px;
    }

    &:active {
      --tab-border-width: 2px;
    }

    &:focus:not(:active) {
      --tab-outline-width: 3px;
    }
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

  &[data-active='true'] {
    --tab-color: ${theme.color('primary')};
    --tab-background-color: ${theme.color('primary', { variation: 'calmer' })};
    --tab-border-color: ${theme.color('primary')};
  }
`

export const SideElementContainer = styled.div`
  display: flex;

  &[data-position='left'] {
    margin-right: 6px;
  }

  &[data-position='right'] {
    margin-left: 6px;
  }
`

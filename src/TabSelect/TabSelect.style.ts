import styled from 'styled-components'

import { theme } from '..'

export const TabSelectContainer = styled.div`
  display: flex;
  & > * {
    border: 1px solid
      ${theme.neutralColor(300, {
        gradient: 'withIntensityFading',
      })};
    margin: -1px;

    --tab-border-width: 0;
    --tab-outline-width: 0;

    &:focus:not(:active) {
      --tab-outline-width: 0;
      --tab-color: ${theme.color('primary')};
      --tab-background-color: ${theme.color('primary', {
        variation: 'calmer',
      })};
      --tab-border-width: 0;
    }
  }

  & > *:not(:first-child):not(:last-child) {
    border-radius: 0;
  }

  & > :first-child {
    border-radius: 4px 0 0 4px;
  }

  & > :last-child {
    border-radius: 0 4px 4px 0;
  }

  &[data-small='true'] {
    & > * {
      --tab-horizontal-padding: 8px;
      --tab-height: 24px;
      --tab-side-element-internal-margin: 4px;
      --tab-side-element-external-margin: 0;
      --tab-font-size: 12px;
    }
  }

  &[data-large='true'] {
    & > * {
      --tab-horizontal-padding: 24px;
      --tab-height: 48px;
      --tab-side-element-internal-margin: 8px;
      --tab-side-element-external-margin: -4px;
      --tab-font-size: 16px;
    }
  }
`

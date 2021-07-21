import styled from 'styled-components'

import { theme } from '..'

export const TabSelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid
    ${theme.neutralColor(300, {
      gradient: 'withIntensityFading',
    })};

  & > *:not(:first-child):not(:last-child) {
    border-radius: 0px;
    border-right: 1px solid
      ${theme.neutralColor(300, {
        gradient: 'withIntensityFading',
      })};
    border-left: 1px solid
      ${theme.neutralColor(300, {
        gradient: 'withIntensityFading',
      })};
  }

  & > :first-child {
    border-radius: 4px 0px 0px 4px;
  }

  & > :last-child {
    border-radius: 0px 4px 4px 0px;
  }

  & > * {
    --tab-border-width: 0;
    --tab-outline-width: 0;

    &:focus:not(:active) {
      --tab-outline-width: 0px;
      --tab-color: ${theme.color('primary')};
      --tab-background-color: ${theme.color('primary', {
        variation: 'calmer',
      })};
      --tab-border-width: 0;
    }
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

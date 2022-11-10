import styled from 'styled-components'

export const TabSelectContainer = styled.div`
  display: flex;

  &[data-full-width='true'] > * {
    flex-grow: 1;
  }
  &[data-small='true'] > * {
    --tab-horizontal-padding: 8px;
    --tab-height: 24px;
    --tab-side-element-internal-margin: 4px;
    --tab-side-element-external-margin: 0;
    --tab-font-size: 12px;
  }

  &[data-large='true'] > * {
    --tab-horizontal-padding: 24px;
    --tab-height: 48px;
    --tab-side-element-internal-margin: 8px;
    --tab-side-element-external-margin: -4px;
    --tab-font-size: 16px;
  }
`

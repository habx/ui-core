import styled from 'styled-components'

import { theme } from '../theme'

export const IconTagContainer = styled.button`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  vertical-align: middle;

  /*
   * Font
   */
  font-size: var(--tag-font-size);

  /*
   * Dimensions
   */
  border-radius: 50%;
  padding: 0 var(--tag-horizontal-padding);
  height: var(--tag-height);
  width: var(--tag-height);

  --tag-horizontal-padding: 6px;
  --tag-height: 36px;
  --tag-side-element-internal-margin: 6px;
  --tag-side-element-external-margin: -2px;
  --tag-font-size: 24px;

  &[data-small='true'] {
    --tag-horizontal-padding: 4px;
    --tag-height: 24px;
    --tag-side-element-internal-margin: 4px;
    --tag-side-element-external-margin: 0;
    --tag-font-size: 16px;
  }

  &[data-large='true'] {
    --tag-horizontal-padding: 12px;
    --tag-height: 48px;
    --tag-side-element-internal-margin: 8px;
    --tag-side-element-external-margin: -4px;
  }

  /*
   * Colors
   */

  box-shadow: inset 0 0 0 var(--tag-border-width) var(--tag-border-color),
    0 0 0 var(--tag-outline-width) var(--tag-outline-color);
  color: var(--tag-color);
  background-color: var(--tag-background-color);

  --tag-outline-width: 0;
  --tag-outline-color: ${theme.color('primary', { opacity: 0.3 })};
  --tag-color: ${theme.color('secondary', { dynamic: true })};
  --tag-background-color: ${theme.color('secondary', {
    variation: 'calmer',
    dynamic: true,
  })};

  &[data-bare='true'] {
    --tag-border-width: 1px;
    --tag-border-color: ${theme.neutralColor(200)};
    --tag-background-color: ${theme.neutralColor(0)};
  }
`

export const IconTagContent = styled.div`
  position: relative;
  white-space: nowrap;
`

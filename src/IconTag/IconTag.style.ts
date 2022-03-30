import styled from 'styled-components'

import { Tag } from '../Tag'
import { theme } from '../theme'

export const IconTagContainer = styled(Tag)`
  border-radius: 50%;
  width: var(--tag-height);

  --tag-horizontal-padding: 6px;
  --tag-side-element-internal-margin: 6px;
  --tag-font-size: 24px;

  &[data-small='true'] {
    --tag-horizontal-padding: 4px;
    --tag-font-size: 16px;
  }

  &[data-large='true'] {
    --tag-horizontal-padding: 12px;
    --tag-font-size: 24px;
  }

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

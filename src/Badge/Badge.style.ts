import styled from 'styled-components'

import { fontScale } from '../fontScale'
import { theme } from '../theme'

export const BadgeContainer = styled.span`
  --badge-height: 16px;
  height: var(--badge-height);
  border-radius: calc(var(--badge-height) / 2);
  background-color: ${theme.color('primary', { dynamic: true })};
  flex: 0 0 auto;
  align-self: flex-start;
  display: inline-flex;
  padding: 2px 6px;
  line-height: 1;

  font-family: ${theme.font()};
  font-size: ${fontScale.asteroid.size}px;
  color: ${theme.color('primary', {
    variation: 'contrastText',
    dynamic: true,
  })};

  &[data-disabled='true'] {
    color: ${theme.neutralColor(500, { gradient: 'withIntensityFading' })};
    background-color: ${theme.neutralColor(300, {
      gradient: 'withIntensityFading',
    })};
  }
`

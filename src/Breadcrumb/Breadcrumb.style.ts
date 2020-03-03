import styled from 'styled-components'

import { Spacing } from './Breadcrumb.interface'

const DEFAULT_MAX_WIDTH = 150

const getSpacing = (spacing?: Spacing) => {
  switch (spacing) {
    case 'large':
      return 18
    case 'narrow':
      return 4
    case 'regular':
      return 9
    default:
      return 9
  }
}
export const BreadcrumbContainer = styled.div<{
  itemMaxWidth?: number
  spacing?: Spacing
}>`
  display: flex;
  flex: 1 1 auto;
  align-items: center;

  overflow-x: auto;

  * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  > * {
    margin-right: ${({ spacing }) => getSpacing(spacing)}px;
    max-width: ${({ itemMaxWidth = DEFAULT_MAX_WIDTH }) => itemMaxWidth}px;
  }
  > *:last-child {
    max-width: initial;
    overflow: visible;
  }
`

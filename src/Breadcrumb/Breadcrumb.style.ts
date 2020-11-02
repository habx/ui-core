import styled from 'styled-components'

import { BreadcrumbItemContainer } from '../BreadcrumbItem/BreadcrumbItem.style'
import { Icon } from '../Icon'

export const BreadcrumbContainer = styled.ul`
  display: flex;
  flex: 1 1 auto;
  align-items: center;

  padding: 0;

  > ${BreadcrumbItemContainer} {
    &:first-child {
      margin-left: -12px;
    }
  }
`

export const BreadcrumbIcon = styled(Icon)`
  margin-right: 4px;
`

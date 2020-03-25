import * as React from 'react'

import getFlattenedChildren from '../_internal/getFlattenedChildren'
import Icon from '../Icon/Icon'

import BreadcrumbProps from './Breadcrumb.interface'
import { BreadcrumbContainer } from './Breadcrumb.style'

const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  (props, ref) => {
    const { children, ...rest } = props
    const items = getFlattenedChildren(children)

    return (
      <BreadcrumbContainer ref={ref} {...rest}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item}
            {index < items.length - 1 && <Icon icon="chevron-east" />}
          </React.Fragment>
        ))}
      </BreadcrumbContainer>
    )
  }
)

export default Breadcrumb

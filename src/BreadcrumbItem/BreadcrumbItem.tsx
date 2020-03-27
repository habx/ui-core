import * as React from 'react'

import { isString } from '../_internal/data'
import BreadcrumbContext from '../Breadcrumb/Breadcrumb.context'
import Tooltip from '../Tooltip/Tooltip'

import BreadcrumbItemProps from './BreadcrumbItem.interface'
import { BreadcrumbItemContainer } from './BreadcrumbItem.style'

const BreadcrumbItem = React.forwardRef<HTMLDivElement, BreadcrumbItemProps>(
  (props, ref) => {
    const { children, as, interactive = true, ...rest } = props
    const { size } = React.useContext(BreadcrumbContext)
    const tooltipTitle = isString(children) ? children : ''
    return (
      <BreadcrumbItemContainer
        as={as}
        ref={ref}
        {...rest}
        data-size={size}
        data-interactive={interactive}
      >
        <Tooltip
          title={tooltipTitle}
          disabled={!isString(children) || !interactive}
          small
        >
          <React.Fragment>{children}</React.Fragment>
        </Tooltip>
      </BreadcrumbItemContainer>
    )
  }
)

export default BreadcrumbItem

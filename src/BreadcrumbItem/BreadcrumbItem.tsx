import * as React from 'react'

import { isString } from '../_internal/data'
import { BreadcrumbContext } from '../Breadcrumb'
import { Tooltip } from '../Tooltip'

import { BreadcrumbItemProps } from './BreadcrumbItem.interface'
import { BreadcrumbItemContainer } from './BreadcrumbItem.style'

export const BreadcrumbItem = React.forwardRef<
  HTMLDivElement,
  BreadcrumbItemProps
>((props, ref) => {
  const { children, as, interactive = true, ...rest } = props
  const { size } = React.useContext(BreadcrumbContext)
  const tooltipTitle = isString(children) ? children : ''

  return (
    <Tooltip
      title={tooltipTitle}
      disabled={!isString(children) || !interactive}
      small
    >
      <BreadcrumbItemContainer
        as={as}
        ref={ref}
        {...rest}
        data-size={size}
        data-interactive={interactive}
      >
        {children}
      </BreadcrumbItemContainer>
    </Tooltip>
  )
})

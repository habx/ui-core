import * as React from 'react'

import { isString } from '../_internal/data'
import { useMergedRef } from '../_internal/useMergedRef'
import { BreadcrumbContext } from '../Breadcrumb/Breadcrumb.context'
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

  const triggerRef = useMergedRef(ref)

  return (
    <Tooltip
      title={tooltipTitle}
      disabled={!isString(children) || !interactive}
      small
      triggerRef={triggerRef}
    >
      <BreadcrumbItemContainer
        as={as}
        ref={triggerRef}
        {...rest}
        data-testid="breadcrumb-item"
        data-size={size}
        data-interactive={interactive}
      >
        {children}
      </BreadcrumbItemContainer>
    </Tooltip>
  )
})

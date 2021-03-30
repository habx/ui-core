import * as React from 'react'

import { AlertPanelProps } from './AlertPanel.interface'
import { AlertBannerContainer, IconContainer } from './AlertPanel.style'

export const AlertPanel = React.forwardRef<HTMLDivElement, AlertPanelProps>(
  (props, ref) => {
    const { warning, error, icon, children, ...rest } = props

    return (
      <AlertBannerContainer
        data-warning={warning}
        data-error={error}
        ref={ref}
        {...rest}
      >
        {icon && <IconContainer>{icon}</IconContainer>}
        {children}
      </AlertBannerContainer>
    )
  }
)

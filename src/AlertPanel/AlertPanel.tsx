import * as React from 'react'

import { AlertPanelProps } from './AlertPanel.interface'
import {
  AlertBannerContainer,
  IconContainer,
  AlertPanelTitle,
} from './AlertPanel.style'

export const AlertPanel = React.forwardRef<HTMLDivElement, AlertPanelProps>(
  (props, ref) => {
    const { icon, title, children, ...rest } = props

    return (
      <AlertBannerContainer ref={ref} {...rest}>
        {icon && <IconContainer>{icon}</IconContainer>}
        <div>
          {title && <AlertPanelTitle>{title}</AlertPanelTitle>}
          {children}
        </div>
      </AlertBannerContainer>
    )
  }
)

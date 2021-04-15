import * as React from 'react'

import { AlertPanelProps } from './AlertPanel.interface'
import {
  AlertBannerContainer,
  IconContainer,
  AlertPanelTitle,
  IllustrationContainer,
} from './AlertPanel.style'

export const AlertPanel = React.forwardRef<HTMLDivElement, AlertPanelProps>(
  (props, ref) => {
    const {
      title,
      illustration,
      icon,
      warning,
      error,
      success,
      bare,
      small,
      children,
      ...rest
    } = props

    return (
      <AlertBannerContainer
        ref={ref}
        data-warning={warning}
        data-error={error}
        data-success={success}
        data-bare={bare}
        data-small={small}
        {...rest}
      >
        {illustration && (
          <IllustrationContainer>{illustration}</IllustrationContainer>
        )}
        {icon && <IconContainer>{icon}</IconContainer>}
        <div>
          {title && (
            <AlertPanelTitle type={small ? 'small' : 'regular'}>
              {title}
            </AlertPanelTitle>
          )}
          {children}
        </div>
      </AlertBannerContainer>
    )
  }
)

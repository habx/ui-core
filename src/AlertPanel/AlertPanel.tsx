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
      bare,
      children,
      error,
      icon,
      illustration,
      primary,
      small,
      success,
      title,
      warning,
      ...rest
    } = props

    return (
      <AlertBannerContainer
        $bare={bare}
        $error={error}
        $primary={primary}
        $small={small}
        $success={success}
        $warning={warning}
        ref={ref}
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

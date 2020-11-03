import * as React from 'react'

import { Icon } from '../Icon'
import { Text } from '../Text'
import { useTheme } from '../useTheme'

import { NotificationProps } from './Toaster.interface'
import {
  NotificationContainer,
  NotificationContent,
  NotificationInformation,
  IllustrationContainer,
  CloseContainer,
} from './Toaster.style'

export const Toaster = React.forwardRef<HTMLDivElement, NotificationProps>(
  (props, ref) => {
    const { onClose, message, illustration, warning, ...rest } = props

    const theme = useTheme()

    return (
      <NotificationContainer
        backgroundColor={
          warning ? theme.colors.warning.base : theme.colors.secondary.base
        }
        ref={ref}
        data-testid="notification-container"
        {...rest}
      >
        <NotificationContent data-testid="notification-content">
          {illustration && (
            <IllustrationContainer>{illustration}</IllustrationContainer>
          )}
          <NotificationInformation>
            <Text opacity={1}>{message}</Text>
          </NotificationInformation>
        </NotificationContent>
        <CloseContainer onClick={onClose}>
          <Icon icon="close" />
        </CloseContainer>
      </NotificationContainer>
    )
  }
)

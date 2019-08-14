import * as React from 'react'

import Icon from '../Icon'
import Text from '../Text'
import Title from '../Title'

import NotificationProps from './Notification.interface'
import {
  NotificationContainer,
  NotificationContent,
  NotificationInformation,
  IllustrationContainer,
  CloseContainer,
} from './Notification.style'

const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  (props, ref) => {
    const { onClose, title, description, illustration, ...rest } = props

    return (
      <NotificationContainer
        ref={ref}
        data-testid="notification-container"
        {...rest}
      >
        <NotificationContent data-testid="notification-content">
          {illustration && (
            <IllustrationContainer>{illustration}</IllustrationContainer>
          )}
          <NotificationInformation>
            <Title type="regular">{title}</Title>
            {description && <Text>{description}</Text>}
          </NotificationInformation>
        </NotificationContent>
        <CloseContainer onClick={onClose}>
          <Icon icon="close" />
        </CloseContainer>
      </NotificationContainer>
    )
  }
)

export default Notification

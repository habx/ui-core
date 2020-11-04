import * as React from 'react'
import Swipe from 'react-easy-swipe'

import { Icon } from '../Icon'
import { useTheme } from '../useTheme'

import { NotificationProps } from './Toaster.interface'
import {
  ToasterContent,
  ToasterText,
  IllustrationContainer,
  CloseContainer,
} from './Toaster.style'

export const Toaster = React.forwardRef<HTMLDivElement, NotificationProps>(
  (props, ref) => {
    const {
      onClose,
      onSeeMore,
      message,
      illustration,
      warning,
      markdown,
      ...rest
    } = props
    const theme = useTheme()

    return (
      <Swipe
        onSwipeUp={onSeeMore}
        onSwipeDown={onClose}
        onSwipeLeft={onClose}
        onSwipeRight={onClose}
        allowMouseEvents
        innerRef={() => {}}
      >
        <ToasterContent
          backgroundColor={
            warning ? theme.colors.warning.base : theme.colors.secondary.base
          }
          ref={ref}
          data-testid="notification-container"
          {...rest}
        >
          {illustration && (
            <IllustrationContainer>{illustration}</IllustrationContainer>
          )}
          <ToasterText
            data-testid="notification-text"
            opacity={1}
            markdown={markdown}
          >
            {message}
          </ToasterText>
          <CloseContainer onClick={onClose}>
            <Icon icon="close" />
          </CloseContainer>
        </ToasterContent>
      </Swipe>
    )
  }
)

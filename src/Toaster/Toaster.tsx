import * as React from 'react'
import Swipe from 'react-easy-swipe'

import { isFunction } from '../_internal/data'
import { useMergedRef } from '../_internal/useMergedRef'
import { Icon } from '../Icon'
import { useThemeVariant } from '../useThemeVariant'

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
    const theme = useThemeVariant()
    const containerRef = useMergedRef(ref)

    const handleSeeMore = () => {
      if (onSeeMore) {
        onSeeMore()
      } else if (containerRef.current) {
        const links = containerRef.current.querySelectorAll('a')
        if (links.length) {
          links[0].click()
        }
      }
    }

    return (
      <Swipe
        onSwipeUp={handleSeeMore}
        onSwipeDown={onClose}
        onSwipeLeft={onClose}
        onSwipeRight={onClose}
        allowMouseEvents
        innerRef={() => {}}
      >
        <ToasterContent
          backgroundColor={
            warning ? theme.colors.error.base : theme.colors.secondary.base
          }
          ref={containerRef}
          data-testid="notification-container"
          {...rest}
        >
          {illustration && (
            <IllustrationContainer>{illustration}</IllustrationContainer>
          )}
          <ToasterText
            data-testid="notification-text"
            variation="title"
            markdown={markdown}
          >
            {isFunction(message) ? message({ close: onClose }) : message}
          </ToasterText>
          <CloseContainer onClick={onClose}>
            <Icon icon="close" />
          </CloseContainer>
        </ToasterContent>
      </Swipe>
    )
  }
)

import * as React from 'react'

import { isString } from '../_internal/data'
import { useIsMounted, useTimeout } from '../_internal/hooks'
import { NotificationEventProps } from '../Notification/Notification.interface'

import { StateNotification } from './NotificationList.interface'
import {
  NotificationListContainer,
  NotificationContainer,
  Notification,
  SLIDE_DURATION,
  SHRINK_DURATION,
} from './NotificationList.style'
import { subscribe } from './notify'

const NotificationList: React.FunctionComponent<{}> = () => {
  const isMounted = useIsMounted()
  const registerTimeout = useTimeout()

  const [notifications, setNotifications] = React.useState<StateNotification[]>(
    []
  )

  const handleClose = React.useCallback(
    (notification: StateNotification) => {
      if (isMounted.current) {
        setNotifications(prev =>
          prev.map(el =>
            el.id === notification.id ? { ...el, open: false } : el
          )
        )

        registerTimeout(
          setTimeout(() => {
            if (isMounted.current) {
              setNotifications(prev =>
                prev.filter(el => el.id !== notification.id)
              )
            }
          }, SLIDE_DURATION + SHRINK_DURATION)
        )
      }
    },
    [isMounted, registerTimeout]
  )

  React.useEffect(
    () =>
      subscribe((message, options) => {
        const notification = {
          message,
          options,
          open: true,
          id: Math.random(),
        }

        setNotifications(prev => [...prev, notification])

        if (options.duration !== 0) {
          registerTimeout(
            setTimeout(
              () => handleClose(notification),
              options.duration || 5000
            )
          )
        }
      }),
    [registerTimeout, handleClose]
  )

  return (
    <NotificationListContainer onClick={e => e.stopPropagation()}>
      {notifications.map(notification => {
        const props: NotificationEventProps = isString(notification.message)
          ? { title: notification.message as string }
          : (notification.message as NotificationEventProps)

        return (
          <NotificationContainer
            key={notification.id}
            data-closing={!notification.open}
          >
            <Notification
              onClose={() => handleClose(notification)}
              data-closing={!notification.open}
              {...props}
            />
          </NotificationContainer>
        )
      })}
    </NotificationListContainer>
  )
}

export default NotificationList

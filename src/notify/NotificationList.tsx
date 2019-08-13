import * as React from 'react'

import { isString } from '../_internal/data'
import { useIsMounted, useTimeout } from '../_internal/hooks'
import { NotificationEventProps } from '../Notification/Notification.interface'

import { StateNotification } from './NotificationList.interface'
import {
  NotificationListContainer,
  Notification,
  ANIMATION_DURATION,
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
          }, ANIMATION_DURATION * 2)
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
    <NotificationListContainer>
      {notifications.map(notification => {
        const props: NotificationEventProps = isString(notification.message)
          ? { title: notification.message as string }
          : (notification.message as NotificationEventProps)

        return (
          <Notification
            key={notification.id}
            onClose={() => handleClose(notification)}
            data-closing={!notification.open}
            {...props}
          />
        )
      })}
    </NotificationListContainer>
  )
}

export default NotificationList

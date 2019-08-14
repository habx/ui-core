import { NotificationEventProps } from '../Notification/Notification.interface'

export type NotificationOptions = {
  type?: 'info' | 'error' | 'warning'
  duration?: number
  identifier?: string | number
}

export type StateNotification = {
  message: string | NotificationEventProps
  options: NotificationOptions
  open: boolean
  id: string | number
}

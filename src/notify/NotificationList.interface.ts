export type NotificationOptions = {
  type?: 'info' | 'error' | 'warning'
  duration?: number
  identifier?: string | number
}

export type StateNotification = {
  message: string
  options: NotificationOptions
  open: boolean
  id: string | number
}

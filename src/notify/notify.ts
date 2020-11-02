import { NotificationEventProps } from '../Notification'
import { buildEventHandler } from '../Provider/Provider.events'

import { NotificationOptions } from './NotificationList.interface'

export const { dispatch: notify, subscribe } = buildEventHandler<
  NotificationEventProps | string,
  NotificationOptions
>()

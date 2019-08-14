import { NotificationEventProps } from '../Notification/Notification.interface'
import buildEventHandler from '../Provider/Provider.events'

import { NotificationOptions } from './NotificationList.interface'

export const { dispatch: notify, subscribe } = buildEventHandler<
  NotificationEventProps | string,
  NotificationOptions
>()

export default notify

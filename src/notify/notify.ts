import { dispatch, types } from '../Provider/Provider.events'

import {
  NotificationOptions,
  NotificationMessage,
} from './NotificationList.interface'

const notify = (
  message: NotificationMessage,
  options: NotificationOptions = {}
) => dispatch(types.NOTIFY, false, message, options)

export default notify

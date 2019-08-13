import { isFunction } from '../_internal/data'

import { subscriptionCallback, EventConfig } from './Provider.interface'

export default <Message = string, Options = {}>(
  eventConfig: EventConfig = {}
) => {
  let subscription: subscriptionCallback<Message, Options> | null

  const subscribe = (callback: subscriptionCallback<Message, Options>) => {
    subscription = callback

    return () => {
      subscription = null
    }
  }

  const dispatch = (
    message: Message,
    options: Options = {} as Options
  ): Promise<any> | void => {
    if (isFunction(subscription)) {
      return subscription(message, options)
    }

    if (eventConfig.returnPromise) {
      return Promise.reject('unknown event')
    }
  }

  return { subscribe, dispatch }
}

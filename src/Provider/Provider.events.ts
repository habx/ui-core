import { isFunction } from '../_internal/data'

import { subscriptionCallback } from './Provider.interface'

export default <Message = string, Options = {}>() => {
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
  }

  return { subscribe, dispatch }
}

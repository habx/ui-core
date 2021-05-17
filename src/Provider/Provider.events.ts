import { Dispatch, Subscribe, SubscriptionCallback } from './Provider.interface'

export const buildEventHandler = <
  Message = string,
  Options = {},
  Return = void
>() => {
  let subscription: SubscriptionCallback<Message, Options> | null = null

  const dispatch: Dispatch<Message, Options, Return> = (message, options) =>
    subscription?.(message, options)

  const subscribe: Subscribe<Message, Options> = (callback) => {
    subscription = callback

    return () => {
      subscription = null
    }
  }

  return { subscribe, dispatch }
}

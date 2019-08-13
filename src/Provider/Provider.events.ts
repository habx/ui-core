import { isFunction } from '../_internal/data'

import { subscriptionCallback } from './Provider.interface'

let subscriptions: { [key: string]: subscriptionCallback } = {}

export const subscribe = (
  messageType: string,
  callback: subscriptionCallback
) => {
  subscriptions[messageType] = callback

  return () => {
    delete subscriptions[messageType]
  }
}

export const dispatch = (
  messageType: string,
  returnPromise: boolean,
  message: string,
  options = {}
): Promise<any> | void => {
  if (isFunction(subscriptions[messageType])) {
    return subscriptions[messageType](message, options)
  }

  if (returnPromise) {
    return Promise.reject('unknown event')
  }
}

export const types = {
  CONFIRM_MODAL: 'CONFIRM_MODAL',
  NOTIFY: 'NOTIFY',
}

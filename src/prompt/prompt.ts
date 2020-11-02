import { buildEventHandler } from '../Provider/Provider.events'

import { PromptMessage } from './PromptModals.interface'

export const { dispatch: prompt, subscribe } = buildEventHandler<
  PromptMessage,
  NotificationOptions
>()

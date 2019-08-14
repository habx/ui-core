import { ModalProps } from '../Modal'
import buildEventHandler from '../Provider/Provider.events'

import { PromptInjectedProps } from './PromptModals.interface'

export const { dispatch: prompt, subscribe } = buildEventHandler<
  (injectedProps: PromptInjectedProps) => ModalProps,
  NotificationOptions
>()

export default prompt

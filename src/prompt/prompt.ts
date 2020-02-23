import * as React from 'react'

import { ModalProps } from '../Modal'
import buildEventHandler from '../Provider/Provider.events'

import { PromptInjectedProps } from './PromptModals.interface'

export const { dispatch: prompt, subscribe } = buildEventHandler<
  (
    injectedProps: PromptInjectedProps
  ) => ModalProps & { Component?: React.ComponentType<{}> },
  NotificationOptions
>()

export default prompt

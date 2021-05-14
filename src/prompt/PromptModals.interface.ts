import * as React from 'react'

import { LightBoxProps } from '../LightBox'
import { ModalProps } from '../Modal'

export type PromptMessage =
  | ((
      injectedProps: PromptInjectedProps
    ) => Omit<LightBoxProps, 'onClose'> & {
      fullscreen: true
      Component?: React.ComponentType
    })
  | ((
      injectedProps: PromptInjectedProps
    ) => Omit<ModalProps, 'onClose'> & {
      fullscreen?: false
      Component?: React.ComponentType
    })

export type StateModal = {
  props: PromptMessage
  options?: any
  open: boolean
  resolve: (response: unknown) => void
  id: number
}

interface PromptInjectedProps {
  onResolve: (result: unknown) => void
}

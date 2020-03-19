import * as React from 'react'

import { LightBoxProps } from '../LightBox'
import { ModalProps } from '../Modal'

export type PromptMessage = (
  injectedProps: PromptInjectedProps
) => // doesn't work: https://github.com/microsoft/TypeScript/issues/241
(PromptInjectedProps extends { fullscreen: true }
  ? LightBoxProps
  : ModalProps) & {
  fullscreen?: boolean
  Component?: React.ComponentType<{}>
}

export type StateModal = {
  props: PromptMessage
  options?: any
  open: boolean
  resolve: (response: unknown) => void
  id: number
}

export interface PromptInjectedProps {
  onResolve: (result: unknown) => void
}

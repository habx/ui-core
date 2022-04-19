import * as React from 'react'

import { LightBoxProps } from '../LightBox'
import { ModalProps } from '../Modal'

export type PromptMessage =
  | ((injectedProps: PromptInjectedProps) => Omit<
      LightBoxProps,
      'onClose' | 'children'
    > & {
      fullscreen: true
      children?: React.ReactNode
      Component?: React.ComponentType<React.PropsWithChildren<{}>>
    })
  | ((injectedProps: PromptInjectedProps) => Omit<
      ModalProps,
      'onClose' | 'children'
    > & {
      fullscreen?: false
      children?: React.ReactNode
      Component?: React.ComponentType<React.PropsWithChildren<{}>>
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

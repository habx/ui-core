import * as React from 'react'

import { ModalProps } from '../Modal'

export type StateModal = {
  props: (
    injectedProps: PromptInjectedProps
  ) => ModalProps & { Component?: React.ComponentType<{}> }
  options?: {}
  open: boolean
  resolve: (response: unknown) => void
  id: number
}

export interface PromptInjectedProps {
  onResolve: (result: unknown) => void
}

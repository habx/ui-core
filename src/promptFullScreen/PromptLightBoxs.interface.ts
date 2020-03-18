import * as React from 'react'

import { LightBoxProps } from '../LightBox'

export type StateModal = {
  props: (
    injectedProps: PromptInjectedProps
  ) => LightBoxProps & { Component?: React.ComponentType<{}> }
  options?: {}
  open: boolean
  resolve: (response: unknown) => void
  id: number
}

export interface PromptInjectedProps {
  onResolve: (result: unknown) => void
}

import { ModalProps } from '../Modal'

export type StateModal = {
  props: (injectedProps: PromptInjectedProps) => ModalProps
  options?: {}
  open: boolean
  resolve: (success: boolean) => void
  id: number
}

export interface PromptInjectedProps {
  onResolve: (result: unknown) => void
}

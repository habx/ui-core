import * as React from 'react'

export interface TriggerReceivedProps {
  triggerElement?: ((state: TriggerState) => JSX.Element) | JSX.Element
  onClose?: (e: React.FormEvent<HTMLInputElement>) => void
}

type TriggerState = {
  open: boolean
}

export type WithTriggerElement<BaseProps> = BaseProps & TriggerReceivedProps

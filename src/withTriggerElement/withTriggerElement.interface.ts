import * as React from 'react'

export interface TriggerReceivedProps<RefElement> {
  triggerElement?: ((state: TriggerState) => JSX.Element) | JSX.Element
  onClose?: (e: React.SyntheticEvent<RefElement>) => void
}

type TriggerState = {
  open: boolean
}

export type WithTriggerElement<BaseProps, RefElement> = BaseProps &
  TriggerReceivedProps<RefElement>

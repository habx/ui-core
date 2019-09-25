import * as React from 'react'

export interface TriggerReceivedProps<RefElement> {
  triggerElement?: ((state: TriggerState) => JSX.Element) | JSX.Element
  onClose?: (e: React.SyntheticEvent<RefElement>) => void
}

export type TriggerState = {
  open: boolean
  onClick?: () => void
}

export type WithTriggerElement<BaseProps, RefElement> = BaseProps &
  TriggerReceivedProps<RefElement>

export interface TriggerElementConfig {
  passTriggerElementAsProp?: boolean
}

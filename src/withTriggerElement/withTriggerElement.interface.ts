export interface TriggerReceivedProps<RefElement> {
  triggerElement?: ((state: TriggerState) => JSX.Element) | JSX.Element
  onClose?: (e: Event) => void
}

type TriggerState = {
  open: boolean
}

export type WithTriggerElement<BaseProps, RefElement> = BaseProps &
  TriggerReceivedProps<RefElement>

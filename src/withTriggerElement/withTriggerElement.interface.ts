import * as React from 'react'

type TriggerElement = ((state: TriggerState) => JSX.Element) | JSX.Element

export interface TriggerReceivedProps<RefElement> {
  triggerElement?: TriggerElement
  triggerRef?: React.RefObject<HTMLElement>
  onClose?: (e: React.SyntheticEvent<RefElement>) => void
}

export interface TriggerInjectedProps {
  triggerRef?: React.RefObject<HTMLElement>
  open?: boolean
}

export type TriggerState = {
  open: boolean
  onClick?: () => void
}

export type WithTriggerElement<BaseProps, RefElement> = Omit<
  BaseProps,
  'open' | 'onClose'
> &
  TriggerReceivedProps<RefElement> & {
    open?: boolean
  }

export interface TriggerElementConfig {
  fowardRef?: boolean
}

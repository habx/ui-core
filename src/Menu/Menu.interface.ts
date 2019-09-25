import * as React from 'react'

import { WithTriggerElement } from '../withTriggerElement'
import { TriggerState } from '../withTriggerElement/withTriggerElement.interface'

export interface MenuInstance {
  open?: boolean
  onClose?: (e: React.SyntheticEvent<HTMLUListElement, Event>) => void
}

export interface MenuInnerProps extends React.HTMLAttributes<HTMLUListElement> {
  open?: boolean
  onClose?: () => void
  fullScreenOnMobile?: boolean
  triggerElement?: ((state: TriggerState) => JSX.Element) | JSX.Element
}

export default interface MenuProps
  extends WithTriggerElement<MenuInnerProps, HTMLUListElement> {}

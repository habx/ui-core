import * as React from 'react'

import { WithTriggerElement } from '../withTriggerElement'

export interface MenuInstance {
  open?: boolean
  onClose?: (e: React.SyntheticEvent<HTMLUListElement, Event>) => void
}

export interface MenuInnerProps extends React.HTMLAttributes<HTMLUListElement> {
  open?: boolean
  onClose?: () => void
  fullScreenOnMobile?: boolean
}

export default interface MenuProps
  extends WithTriggerElement<MenuInnerProps, HTMLUListElement> {}

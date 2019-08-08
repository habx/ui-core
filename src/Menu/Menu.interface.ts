import * as React from 'react'

import { WithTriggerElement } from '../withTriggerElement'

export interface MenuInnerProps extends React.HTMLAttributes<HTMLUListElement> {
  open?: boolean
}

export default interface MenuProps extends WithTriggerElement<MenuInnerProps> {}

import * as React from 'react'

import { WithTriggerElement } from '../withTriggerElement'

export interface LightHouseInnerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onClose?: (e: React.SyntheticEvent<HTMLElement>) => void
}

export default interface LightHouseProps
  extends WithTriggerElement<LightHouseInnerProps> {}

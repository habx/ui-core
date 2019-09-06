import * as React from 'react'

import { WithTriggerElement } from '../withTriggerElement'

export interface LightHouseInnerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onClose?: () => void
}

export default interface LightHouseProps
  extends WithTriggerElement<LightHouseInnerProps, HTMLDivElement> {}

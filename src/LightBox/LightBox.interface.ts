import * as React from 'react'

import { WithTriggerElement } from '../withTriggerElement'

export interface LightBoxInnerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onClose?: () => void
  persistent?: boolean
  animated?: boolean
}

export default interface LightBoxProps
  extends WithTriggerElement<LightBoxInnerProps, HTMLDivElement> {}

import * as React from 'react'

import { WithTriggerElement } from '../withTriggerElement'

export interface LightBoxInnerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onClose?: () => void
}

export default interface LightBoxProps
  extends WithTriggerElement<LightBoxInnerProps, HTMLDivElement> {}

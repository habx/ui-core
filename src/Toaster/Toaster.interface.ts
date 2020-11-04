import * as React from 'react'

import { Except } from '../_internal/types'

export interface ToasterEventProps {
  message: React.ReactNode
  illustration?: React.ReactNode
  warning?: boolean
  markdown?: boolean
}

export interface NotificationProps
  extends ToasterEventProps,
    Except<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  onClose?: () => void
  onSeeMore?: () => void
}

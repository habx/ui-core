import * as React from 'react'

import { Except } from '../_internal/types'

export interface NotificationEventProps {
  title: string
  description?: string
  illustration?: React.ReactNode
  warning?: boolean
}

export default interface NotificationProps
  extends NotificationEventProps,
    Except<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  onClose?: () => void
}

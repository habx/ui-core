import * as React from 'react'

export interface ToasterEventProps {
  message: React.ReactNode
  illustration?: React.ReactNode
  warning?: boolean
  markdown?: boolean
}

export interface NotificationProps
  extends ToasterEventProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  onClose?: () => void
  onSeeMore?: () => void
  backgroundColor?: string
}

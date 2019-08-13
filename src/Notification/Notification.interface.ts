import * as React from 'react'

export default interface NotificationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void
  title: string
  description?: string
  illustration?: React.ReactNode
}

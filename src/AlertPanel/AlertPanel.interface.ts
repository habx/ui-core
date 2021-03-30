import * as React from 'react'

export interface AlertPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  warning?: boolean
  error?: boolean
  icon?: React.ReactNode
}

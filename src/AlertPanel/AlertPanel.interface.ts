import * as React from 'react'

export interface AlertPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  warning?: boolean
  error?: boolean
  icon?: React.ReactNode
}

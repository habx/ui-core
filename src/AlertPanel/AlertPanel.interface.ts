import * as React from 'react'

export interface AlertPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  warning?: boolean
  success?: boolean
  error?: boolean
  bare?: boolean
  small?: boolean
  icon?: React.ReactNode
  illustration?: React.ReactNode
}

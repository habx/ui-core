import * as React from 'react'

export interface AlertPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  bare?: boolean
  error?: boolean
  icon?: React.ReactNode
  illustration?: React.ReactNode
  primary?: boolean
  small?: boolean
  success?: boolean
  title?: string
  warning?: boolean
}

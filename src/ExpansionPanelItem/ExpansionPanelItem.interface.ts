import * as React from 'react'

export default interface ExpansionPanelItem
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  header?: React.ReactNode
  error?: boolean
  open?: boolean
  onToggle?: (e?: React.MouseEvent) => void
  children?: React.ReactNode | ((config: { open: boolean }) => JSX.Element)
}

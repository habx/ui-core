import { Modal } from '@delangle/use-modal'
import * as React from 'react'

export default interface ExpansionPanelItem
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  error?: boolean
  open?: boolean
  onToggle?: (e?: React.MouseEvent) => void
  children?: React.ReactNode | ((state: Modal) => JSX.Element)
  header?: React.ReactNode | ((state: Modal) => JSX.Element)
}

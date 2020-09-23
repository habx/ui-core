import { Modal } from '@delangle/use-modal'
import * as React from 'react'

export default interface ExpansionPanelItem
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  error?: boolean
  open?: boolean
  defaultOpen?: boolean
  onToggle?: (e?: React.MouseEvent) => void
  children?: React.ReactNode | ((state: Modal) => React.ReactNode)
  header?: React.ReactNode | ((state: Modal) => React.ReactNode)
  disabled?: boolean
}

import { Modal } from '@delangle/use-modal'
import * as React from 'react'

export interface ExpansionPanelItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  error?: boolean
  onToggle?: (e?: React.MouseEvent) => void
  children?: React.ReactNode | ((state: Modal) => React.ReactNode)
  header?: React.ReactNode | ((state: Modal) => React.ReactNode)
  disabled?: boolean
  defaultOpen?: boolean
  /**
   * Positionb sticky when opened
   */
  sticky?: boolean
}

export interface ControlledExpansionPanelItemProps
  extends Omit<ExpansionPanelItemProps, 'defaultOpen'> {
  open?: boolean
}

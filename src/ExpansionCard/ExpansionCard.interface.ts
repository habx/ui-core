import { Modal } from '@delangle/use-modal'

import { CardProps } from '../Card'

export interface ExpansionCardProps
  extends Omit<CardProps, 'title' | 'children'> {
  children?: React.ReactNode
  defaultOpen?: boolean
  description?: string | React.ReactNode
  disabled?: boolean
  error?: boolean
  header?: React.ReactNode | ((state: Modal) => React.ReactNode)
  onToggle?: (e?: React.MouseEvent) => void
  /**
   * Positionb sticky when opened
   */
  sticky?: boolean
  title?: string | React.ReactNode
}

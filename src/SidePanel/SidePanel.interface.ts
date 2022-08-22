import * as React from 'react'

export interface SidePanelProps {
  onClose: () => void
  navigationContent?: React.ReactNode
  tabsBarContent?: React.ReactNode
  title: string
}

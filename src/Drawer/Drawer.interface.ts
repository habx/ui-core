import * as React from 'react'

export enum DrawerStep {
  closed = 'closed',
  slight = 'slight',
  middle = 'middle',
  full = 'full',
}
export interface DrawerProps {
  state?: DrawerStep
  onStateChange?: (state: DrawerStep) => void
  children?: React.ReactNode
}

import * as React from 'react'

export enum DrawerStep {
  closed = 'closed',
  slight = 'slight',
  middle = 'middle',
  full = 'full',
  transitioning = 'transitioning',
}
export interface DrawerProps {
  state?: DrawerStep
  onStateChange?: (state: DrawerStep) => void
  children?: React.ReactNode
}

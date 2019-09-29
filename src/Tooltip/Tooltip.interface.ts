import * as React from 'react'

export default interface TooltipProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  small?: boolean
  followCursor?: boolean
}

export interface TooltipWithTriggerElementProps {
  hasDescription: boolean
  triggerElement: React.ReactComponentElement<any>
  tooltip: React.ReactNode
  followCursor?: boolean
}

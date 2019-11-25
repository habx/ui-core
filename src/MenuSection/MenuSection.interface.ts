import * as React from 'react'

export default interface MenuSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  titleIconLeft?: React.ReactNode
  titleIconRight?: React.ReactNode
}

export interface MenuSectionContextProps {
  depth: number
}

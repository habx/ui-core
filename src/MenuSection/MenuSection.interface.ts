import * as React from 'react'

export default interface MenuSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  titleIconLeft?: JSX.Element
  titleIconRight?: JSX.Element
}

export interface MenuSectionContextProps {
  depth: number
}

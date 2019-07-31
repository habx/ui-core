import * as React from 'react'

export default interface NavigationDotsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size: number
  activeDot?: number
  disabled?: boolean
  onClickDot?: (activeDot: number) => void
}

export interface DotObject {
  active: boolean
  index: number
  small?: boolean
}

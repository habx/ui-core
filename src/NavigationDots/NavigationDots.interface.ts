import * as React from 'react'

export interface NavigationDotsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size: number
  activeDot?: number
  darkMode?: boolean

  /**
   * @default false
   */
  disabled?: boolean

  onClickDot?: (activeDot: number) => void
}

export interface DotObject {
  active: boolean
  index: number
  small?: boolean
}

import * as React from 'react'

declare module 'react-easy-swipe' {
  type Position = { x: number; y: number }

  export interface ReactEasySwipeProps
    extends React.HTMLAttributes<HTMLDivElement> {
    onSwipeEnd: (
      position: Position,
      event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
    ) => void
    onSwipeMove: (
      position: Position,
      event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
    ) => void
  }

  const Module: React.ForwardRefExoticComponent<
    HTMLDivElement,
    ReactEasySwipeProps
  > = () => {}

  export default Module
}

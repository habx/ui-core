import * as React from 'react'

export type SlideShowActions = {
  goToSlide: (currentSlide: number) => void
}

export enum SlideChangeSource {
  'initial' = 'initial',
  'parentCall' = 'parentCall',
  'keyboard' = 'keyboard',
  'navigationButton' = 'navigationButton',
  'swipe' = 'swipe',
}

export default interface SlideShowProps {
  defaultDevice: string
  registerActions?: (actions: SlideShowActions) => void
  onSelectedSlideChange?: (
    currentSlide: number,
    { source }: { source: SlideChangeSource }
  ) => void
  hideNavigation?: boolean
  circular?: boolean
  referenceSlideIndex?: number
  navigationComponent?: React.ComponentType<any>
  hideNavigationDots?: boolean
  items?: any[]
  renderItem: (
    item: any,
    index: number,
    isDuplicate?: boolean
  ) => React.ReactNode
}

export interface SlideShowState {
  isSwiping: boolean
  currentSlide: number
  previousSlide: number
  lastSlideChangeSource: SlideChangeSource
  swipePosition: {
    x: number
    y: number
  }
}

export enum ActionType {
  GoToSlide = 1,
  SwipeMove = 2,
  SwipeEnd = 3,
}

export type SlideShowAction =
  | {
      type: ActionType.SwipeMove
      value: { x: number; y: number }
      event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
    }
  | { type: ActionType.SwipeEnd }
  | {
      type: ActionType.GoToSlide
      isRelative?: boolean
      source: SlideChangeSource
      value: number
    }

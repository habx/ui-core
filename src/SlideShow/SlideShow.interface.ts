import * as React from 'react'
import { SwipeEvent } from 'react-easy-swipe'

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

export interface SlideShowProps {
  defaultDevice?: string
  registerActions?: (actions: SlideShowActions) => void
  onCurrentSlideChange?: (
    currentSlide: number,
    { source }: { source: SlideChangeSource }
  ) => void
  circular?: boolean
  referenceSlideIndex?: number
  hideNavigationDots?: boolean
  currentSlide?: number
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
      event: SwipeEvent
    }
  | { type: ActionType.SwipeEnd }
  | {
      type: ActionType.GoToSlide
      isRelative?: boolean
      source: SlideChangeSource
      value: number
    }

import * as React from 'react'

import { NavigationDots } from '../NavigationDots'
import { RoundIconButton } from '../RoundIconButton'

import { SlideShowNavigationContainer } from './SlideShow.style'

const InnerSlideShowNavigation: React.FunctionComponent<SlideShowNavigationProps> =
  ({
    next,
    previous,
    size,
    active,
    circular,
    hideNavigationDots,
    disabled,
  }) => (
    <SlideShowNavigationContainer className="slideshow-navigation-container">
      <div className="slideshow-navigation-button" data-target="previous">
        <RoundIconButton
          icon="arrow-west"
          onClick={previous}
          disabled={(!circular && active === 0) || disabled}
        />
      </div>
      {hideNavigationDots ? (
        <div />
      ) : (
        <NavigationDots
          className="slideshow-navigation-dots"
          size={size}
          activeDot={(active + size) % size}
          disabled={disabled}
        />
      )}
      <div className="slideshow-navigation-button" data-target="next">
        <RoundIconButton
          icon="arrow-east"
          onClick={next}
          disabled={(!circular && active === size - 1) || disabled}
        />
      </div>
    </SlideShowNavigationContainer>
  )

interface SlideShowNavigationProps {
  next: () => void
  previous: () => void
  size: number
  active: number
  hideNavigationDots: boolean
  disabled: boolean
  circular: boolean
}

export const SlideShowNavigation = React.memo(InnerSlideShowNavigation)

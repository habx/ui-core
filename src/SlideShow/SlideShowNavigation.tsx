import * as React from 'react'

import { NavigationButton } from '../NavigationButton'
import { NavigationDots } from '../NavigationDots'

import { SlideShowNavigationContainer } from './SlideShow.style'

const InnerSlideShowNavigation: React.FunctionComponent<SlideShowNavigationProps> = ({
  next,
  previous,
  size,
  active,
  circular,
  hideNavigationDots,
}) => (
  <SlideShowNavigationContainer className="slideshow-navigation-container">
    <div className="slideshow-navigation-button" data-target="previous">
      <NavigationButton
        previous
        large
        onClick={previous}
        disabled={!circular && active === 0}
        secondary
      />
    </div>
    {hideNavigationDots ? (
      <div />
    ) : (
      <NavigationDots
        className="slideshow-navigation-dots"
        size={size}
        activeDot={(active + size) % size}
      />
    )}
    <div className="slideshow-navigation-button" data-target="next">
      <NavigationButton
        large
        onClick={next}
        disabled={!circular && active === size - 1}
        secondary
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
  circular: boolean
}

export const SlideShowNavigation = React.memo(InnerSlideShowNavigation)

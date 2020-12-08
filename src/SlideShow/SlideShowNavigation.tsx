import * as React from 'react'

import { NavigationButton } from '../NavigationButton'
import { NavigationDots } from '../NavigationDots'

import {
  NavigationButtonContainer,
  NavigationDotsContainer,
} from './SlideShow.style'

const InnerSlideShowNavigation: React.FunctionComponent<SlideShowNavigationProps> = ({
  next,
  previous,
  size,
  active,
  circular,
  hideNavigationDots,
}) => (
  <React.Fragment>
    <NavigationButtonContainer className="slideshow-navigation-button">
      <NavigationButton
        previous
        large
        onClick={previous}
        disabled={!circular && active === 0}
      />
    </NavigationButtonContainer>
    <NavigationButtonContainer
      data-right
      className="slideshow-navigation-button"
    >
      <NavigationButton
        large
        onClick={next}
        disabled={!circular && active === size - 1}
      />
    </NavigationButtonContainer>
    {!hideNavigationDots && (
      <NavigationDotsContainer className="slideshow-navigation-dots">
        <NavigationDots size={size} activeDot={(active + size) % size} />
      </NavigationDotsContainer>
    )}
  </React.Fragment>
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

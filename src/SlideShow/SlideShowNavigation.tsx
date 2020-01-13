import * as React from 'react'

import NavigationButton from '../NavigationButton'
import NavigationDots from '../NavigationDots'

import {
  NavigationButtonContainer,
  NavigationDotsContainer,
} from './SlideShow.style'

const SlideShowNavigation: React.FunctionComponent<SlideShowNavigationProps> = ({
  next,
  previous,
  size,
  active,
  circular,
  hideNavigationDots,
  navigationComponent,
  secondary,
}) => (
  <React.Fragment>
    <NavigationButtonContainer as={navigationComponent}>
      <NavigationButton
        previous
        large
        onClick={previous}
        disabled={!circular && active === 0}
        secondary={secondary}
      />
    </NavigationButtonContainer>
    <NavigationButtonContainer data-right as={navigationComponent}>
      <NavigationButton
        large
        onClick={next}
        disabled={!circular && active === size - 1}
        secondary={secondary}
      />
    </NavigationButtonContainer>
    {!hideNavigationDots && (
      <NavigationDotsContainer>
        <NavigationDots
          size={size}
          activeDot={(active + size) % size}
          secondary={secondary}
        />
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
  secondary?: boolean
  navigationComponent?: React.ComponentType<any>
}

export default React.memo(SlideShowNavigation)

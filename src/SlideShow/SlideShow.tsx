import * as React from 'react'

import { isNil } from '../_internal/data'
import { useMergedRef } from '../_internal/useMergedRef'
import { useResponsiveType } from '../useResponsiveType'

import { useSlideShow } from './SlideShow.hooks'
import { SlideShowProps } from './SlideShow.interface'
import {
  DESKTOP_ANIMATION_DURATION,
  MOBILE_ANIMATION_DURATION,
  SlideShowContainer,
  SlideShowSlidingContainer,
  SlideShowSlidingContent,
} from './SlideShow.style'
import { SlideShowContent } from './SlideShowContent'
import { SlideShowNavigation } from './SlideShowNavigation'

const DEFAULT_ITEMS: any[] = []

export const SlideShow = React.forwardRef<HTMLDivElement, SlideShowProps>(
  (props, ref) => {
    const {
      items = DEFAULT_ITEMS,
      renderItem,
      defaultDevice,
      hideNavigationDots = false,
      onCurrentSlideChange,
      registerActions,
      circular = true,
      currentSlide,
      referenceSlideIndex = 0,
      disabled = false,
      ...rest
    } = props

    const responsiveType = useResponsiveType(defaultDevice)
    const containerRef = useMergedRef<HTMLDivElement>(ref)

    const slideShow = useSlideShow({
      items,
      onCurrentSlideChange,
      registerActions,
      circular,
      currentSlide,
      ref: containerRef,
    })

    const isMobile = ['mobile', 'smallTablet'].includes(responsiveType)

    const style = React.useMemo(() => {
      const {
        swipePosition,
        currentSlide: currentSlideFromSlideShow,
        isSwiping,
      } = slideShow

      if (typeof window !== 'object') {
        if (isMobile) {
          return {}
        } else {
          return {
            transform: 'translateX(0%) translateX(0px)',
            transition: 'transform 500ms ease-in-out',
          }
        }
      }

      if (!isSwiping && isMobile) {
        return {}
      }

      const baseTranslate = `translateX(${-currentSlideFromSlideShow * 100}%)`
      const swipeTranslate = `translateX(${swipePosition.x}px)`

      const animationDuration = isSwiping
        ? 0
        : isMobile
        ? MOBILE_ANIMATION_DURATION
        : DESKTOP_ANIMATION_DURATION

      return {
        transform: `${baseTranslate} ${swipeTranslate}`,
        transition: `transform ${animationDuration}ms ease-in-out`,
      }
    }, [isMobile, slideShow])

    return (
      <SlideShowContainer
        onSwipeEnd={slideShow.handleSwipeEnd}
        onSwipeMove={slideShow.handleSwipeMove}
        innerRef={() => {}}
        {...rest}
      >
        <SlideShowSlidingContainer ref={containerRef}>
          <SlideShowSlidingContent
            data-current={slideShow.currentSlide}
            style={style}
            size={slideShow.slideAmount}
          >
            <SlideShowContent
              referenceSlideIndex={referenceSlideIndex}
              items={items}
              renderItem={renderItem}
              active={slideShow.currentSlide}
              circular={circular}
            />
          </SlideShowSlidingContent>
        </SlideShowSlidingContainer>
        {isNil(currentSlide) && (
          <SlideShowNavigation
            next={slideShow.handleNextClick}
            previous={slideShow.handlePreviousClick}
            active={slideShow.currentSlide}
            circular={circular}
            size={slideShow.slideAmount}
            hideNavigationDots={hideNavigationDots}
            disabled={disabled}
          />
        )}
      </SlideShowContainer>
    )
  }
)

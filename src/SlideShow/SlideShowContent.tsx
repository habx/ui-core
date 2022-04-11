import * as React from 'react'

import { isNil, minBy, maxBy } from '../_internal/data'

import { SlideContent } from './SlideShow.style'
import { getClosestSlidePosition } from './SlideShow.utils'

type Slide = {
  position: number
  isDuplicate?: boolean
  index: number
  item: any
}

const InnerSlideShowContent: React.FunctionComponent<SlideShowContentProps> = ({
  items,
  renderItem,
  active,
  circular,
  referenceSlideIndex,
}) => {
  const slideAmount = items.length

  const slides = React.useMemo<Slide[]>(() => {
    if (items.length === 0) {
      return []
    }

    const slidesWithPosition = items.map((item, index) => ({
      item,
      index,
      position: getClosestSlidePosition({
        slideAmount,
        currentSlide: active,
        slideIndex: index,
      }),
    }))

    const mostLeftSlide = minBy<Slide>(
      slidesWithPosition,
      (slide) => slide.position
    )
    const additionalRightSlide =
      slideAmount < 5
        ? {
            ...mostLeftSlide,
            position: mostLeftSlide.position + slideAmount,
            isDuplicate: true,
          }
        : null

    const mostRightSlide = maxBy<Slide>(
      slidesWithPosition,
      (slide) => slide.position
    )
    const additionalLeftSlide: Slide | null =
      slideAmount < 4
        ? {
            ...mostRightSlide,
            position: mostRightSlide.position - slideAmount,
            isDuplicate: true,
          }
        : null

    const rawSlides = [
      additionalLeftSlide,
      additionalRightSlide,
      ...slidesWithPosition,
    ].filter((el) => !isNil(el)) as Slide[]

    return circular
      ? rawSlides
      : rawSlides.filter((el) => el.position >= 0 && el.position < slideAmount)
  }, [items, slideAmount, circular, active])

  return (
    <React.Fragment>
      <SlideContent data-first>
        {renderItem(items[referenceSlideIndex], referenceSlideIndex)}
      </SlideContent>
      {slides.map((slide) => {
        return (
          <SlideContent
            key={slide.position}
            style={{
              left: `${slide.position * 100}%`,
            }}
          >
            {renderItem(slide.item, slide.index, slide.isDuplicate)}
          </SlideContent>
        )
      })}
    </React.Fragment>
  )
}

export interface SlideShowContentProps {
  items: any[]
  renderItem: (
    item: any,
    index: number,
    isDuplicate?: boolean
  ) => React.ReactNode
  active: number
  circular: boolean
  referenceSlideIndex: number
}

export const SlideShowContent = React.memo(InnerSlideShowContent)

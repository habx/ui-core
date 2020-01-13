import { minBy } from '../_internal/data'

const SWIPE_THRESHOLD = 30

export const getSwipeDelta = ({ x, y }: { x: number; y: number }) => {
  if (Math.abs(y) > Math.abs(x)) {
    return 0
  }

  if (x > SWIPE_THRESHOLD) {
    return -1
  }

  if (x < -SWIPE_THRESHOLD) {
    return 1
  }

  return 0
}

export const getRelativePosition = ({
  currentSlide,
  slideAmount,
}: {
  currentSlide: number
  slideAmount: number
}) => (currentSlide + slideAmount * 1000) % slideAmount

export const getClosestSlidePosition = ({
  slideIndex,
  currentSlide,
  slideAmount,
}: {
  slideIndex: number
  currentSlide: number
  slideAmount: number
}) => {
  const currentIteration = Math.floor(currentSlide / slideAmount)

  return minBy(
    Array.from(
      { length: 3 },
      (_, i) => slideIndex + (currentIteration + i - 1) * slideAmount
    ),
    el => Math.abs(el - currentSlide)
  )
}

export const isElementInViewport = (domElement: HTMLElement) => {
  const bounding = domElement.getBoundingClientRect()

  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  )
}

import * as React from 'react'

import SliderDotProps from './SliderDot.interface'
import { SliderDotContainer, SliderInnerDot } from './SliderDot.style'

type Listeners = {
  mousemove?: EventListener
  mouseup?: EventListener
  touchmove?: EventListener
  touchend?: EventListener
}

const getTouchPosition = (e: TouchEvent | React.TouchEvent) =>
  e.touches[0].pageX
const getMousePosition = (e: MouseEvent | React.MouseEvent) => e.pageX

const useMouseMove = ({
  onMove,
  onRest,
}: {
  onMove: (position: number) => void
  onRest: () => void
}) => {
  const listeners: React.MutableRefObject<Listeners> = React.useRef({})
  const restPosition: React.MutableRefObject<number> = React.useRef(0)

  const addListener = (
    listenerName: keyof Listeners,
    listener: EventListener
  ) => {
    document.addEventListener(listenerName, listener)
    listeners.current[listenerName] = listener
  }

  const removeListener = (listenerName: keyof Listeners) => {
    if (listeners.current[listenerName]) {
      document.removeEventListener(
        listenerName,
        listeners.current[listenerName] as EventListener
      )
      delete listeners.current[listenerName]
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    const handleMouseMove = (e: Event) => {
      onMove(getMousePosition(e as MouseEvent) - restPosition.current)
      e.preventDefault()
    }

    const handleMouseUp = () => {
      removeListener('mousemove')
      removeListener('mouseup')
      onRest()
    }

    addListener('mousemove', handleMouseMove)
    addListener('mouseup', handleMouseUp)

    restPosition.current = getMousePosition(e)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    const handleTouchMove = (e: Event) => {
      onMove(getTouchPosition(e as TouchEvent) - restPosition.current)
      e.preventDefault()
    }

    const handleTouchEnd = () => {
      removeListener('touchmove')
      removeListener('touchend')
      onRest()
    }

    addListener('touchmove', handleTouchMove)
    addListener('touchend', handleTouchEnd)

    restPosition.current = getTouchPosition(e)
  }

  return { onMouseDown: handleMouseDown, onTouchStart: handleTouchStart }
}

const SliderDot: React.FunctionComponent<SliderDotProps> = ({
  position,
  onMove,
  onRest,
  innerColor,
  large = false,
}) => {
  const eventProps = useMouseMove({ onMove, onRest })

  return (
    <SliderDotContainer
      data-testid="slider-dot"
      style={{ left: `${position}%` }}
      data-large={large}
      {...eventProps}
    >
      {innerColor && <SliderInnerDot style={{ backgroundColor: innerColor }} />}
    </SliderDotContainer>
  )
}

export default SliderDot

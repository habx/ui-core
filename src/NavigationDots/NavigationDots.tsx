import * as React from 'react'

import { useHasColoredBackground } from '../useHasColoredBackground'

import { NavigationDotsProps, DotObject } from './NavigationDots.interface'
import { NavigationDotsContainer, Dot } from './NavigationDots.style'

const MAX_VISIBLE_DOTS = 5

export const NavigationDots = React.forwardRef<
  HTMLDivElement,
  NavigationDotsProps
>((props, ref) => {
  const { size, disabled, activeDot = 0, onClickDot, ...rest } = props

  const hasBackground = useHasColoredBackground()

  const visibleDots = React.useMemo<DotObject[]>(() => {
    if (size < MAX_VISIBLE_DOTS) {
      return Array.from({ length: size }).map((_, index) => ({
        active: index === activeDot,
        index,
      }))
    }

    if ([0, 1].includes(activeDot)) {
      return Array.from({ length: MAX_VISIBLE_DOTS }).map((_, index) => ({
        active: index === activeDot,
        index,
        small: index === MAX_VISIBLE_DOTS - 1,
      }))
    }

    if ([size - 1, size - 2].includes(activeDot)) {
      const offset = size - MAX_VISIBLE_DOTS

      return Array.from({ length: MAX_VISIBLE_DOTS }).map((_, index) => ({
        active: index === activeDot - offset,
        index: index + offset,
        small: index === 0,
      }))
    }

    const offset = activeDot - 2

    return Array.from({ length: MAX_VISIBLE_DOTS }).map((_, index) => ({
      active: index === activeDot - offset,
      index: index + offset,
      small: [0, MAX_VISIBLE_DOTS - 1].includes(index),
    }))
  }, [activeDot, size])

  return (
    <NavigationDotsContainer ref={ref} {...rest}>
      {visibleDots.map((dot) => (
        <Dot
          data-testid="navigation-dot"
          key={dot.index}
          data-active={!!dot.active}
          data-interactive={!!onClickDot}
          data-background={hasBackground}
          data-small={dot.small}
          data-disabled={disabled}
          onClick={onClickDot ? () => onClickDot(dot.index) : undefined}
        />
      ))}
    </NavigationDotsContainer>
  )
})

import React from 'react'

import useTheme from '../useTheme'

import NavigationDotsProps, { DotObject } from './NavigationDots.interface'
import { NavigationDotsContainer, Dot } from './NavigationDots.style'

const MAX_VISIBLE_DOTS = 5

const NavigationDots: React.FunctionComponent<NavigationDotsProps> = ({
  size,
  disabled,
  activeDot = 0,
  onClickDot,
  secondary,
  ...props
}) => {
  const theme = useTheme()

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
        index,
        small: index === 0,
      }))
    }

    const offset = activeDot - 2

    return Array.from({ length: MAX_VISIBLE_DOTS }).map((_, index) => ({
      active: index === activeDot - offset,
      index,
      small: [0, MAX_VISIBLE_DOTS - 1].includes(index),
    }))
  }, [activeDot, size])

  const width = visibleDots.reduce(
    (acc, el, index) =>
      acc + (el.active ? 16 : el.small ? 6 : 8) + (index > 0 ? 4 : 0),
    0
  )

  return (
    <NavigationDotsContainer {...props} width={width}>
      {visibleDots.map(dot => (
        <Dot
          key={dot.index}
          data-active={dot.active}
          data-interactive={!!onClickDot}
          data-background={theme.backgroundColor !== '#FFFFFF'}
          data-small={dot.small}
          data-disabled={disabled}
          onClick={onClickDot ? () => onClickDot(dot.index) : undefined}
          secondary={secondary}
        />
      ))}
    </NavigationDotsContainer>
  )
}

export default NavigationDots

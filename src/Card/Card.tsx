import * as React from 'react'

import { useCurrentBackground } from '../useCurrentBackground'

import { CardProps } from './Card.interface'
import { CardContainer } from './Card.style'

export const Card = React.forwardRef<
  HTMLDivElement | HTMLButtonElement,
  CardProps
>((props, ref) => {
  const defaultBackgroundColor = useCurrentBackground()
  const {
    animated,
    flat,
    children,
    spacing,
    backgroundColor = defaultBackgroundColor,
    ...rest
  } = props

  return (
    <CardContainer
      ref={ref}
      {...rest}
      backgroundColor={backgroundColor}
      data-animated={animated}
      data-flat={flat}
      data-spacing={spacing}
    >
      {children}
    </CardContainer>
  )
})

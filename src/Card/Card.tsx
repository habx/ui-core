import * as React from 'react'

import CardProps from './Card.interface'
import { CardContainer } from './Card.style'

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    animated,
    flat,
    children,
    spacing,
    backgroundColor = '#FFFFFF',
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

export default Card

import * as React from 'react'

import CardProps from './Card.interface'
import { CardContainer } from './Card.style'

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { animated, flat, children, ...rest } = props

  return (
    <CardContainer
      ref={ref}
      {...rest}
      data-animated={animated}
      data-flat={flat}
      backgroundColor="#FFFFFF"
    >
      {children}
    </CardContainer>
  )
})

export default Card

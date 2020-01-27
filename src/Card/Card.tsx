import * as React from 'react'

import useTheme from '../useTheme'

import CardProps from './Card.interface'
import { CardContainer } from './Card.style'

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { animated, flat, children, ...rest } = props

  const theme = useTheme()

  return (
    <CardContainer
      ref={ref}
      {...rest}
      data-animated={animated}
      data-flat={flat}
      backgroundColor={theme.backgroundColor}
    >
      {children}
    </CardContainer>
  )
})

export default Card

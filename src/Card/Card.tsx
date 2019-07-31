import * as React from 'react'

import CardProps from './Card.interface'
import { CardContainer } from './Card.style'

const Card: React.FunctionComponent<CardProps> = ({
  animated,
  flat,
  children,
  ...props
}) => (
  <CardContainer
    {...props}
    data-animated={animated}
    data-flat={flat}
    backgroundColor="#FFFFFF"
  >
    {children}
  </CardContainer>
)

export default Card

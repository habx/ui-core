import * as React from 'react'

import CardProps from './CardButton.interface'
import {
  CardButtonContainer,
  CardButtonDescription,
  CardButtonIllustration,
  CardButtonTitle,
} from './CardButton.style'

const CardButton = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { title, illustration, description, ...rest } = props

  return (
    <CardButtonContainer ref={ref} animated {...rest}>
      <CardButtonIllustration src={illustration} alt={title} />
      <CardButtonTitle>{title}</CardButtonTitle>
      <CardButtonDescription>{description}</CardButtonDescription>
    </CardButtonContainer>
  )
})

export default CardButton

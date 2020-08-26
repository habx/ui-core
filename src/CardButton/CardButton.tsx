import * as React from 'react'

import CardProps from './CardButton.interface'
import {
  CardButtonContainer,
  CardButtonDescription,
  CardButtonIllustration,
  CardButtonTitle,
} from './CardButton.style'

export const CardButton = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const { title, illustration, description, markdown, ...rest } = props

    return (
      <CardButtonContainer ref={ref} animated {...rest}>
        <CardButtonIllustration src={illustration} alt={title} />
        <CardButtonTitle markdown={markdown}>{title}</CardButtonTitle>
        <CardButtonDescription markdown={markdown}>
          {description}
        </CardButtonDescription>
      </CardButtonContainer>
    )
  }
)

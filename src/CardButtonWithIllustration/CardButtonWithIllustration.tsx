import * as React from 'react'

import { Text } from '../Text'
import { Title } from '../Title'

import { CardButtonWithIllustrationProps } from './CardButtonWithIllustration.interface'
import {
  CardButtonWithIllustrationContainer,
  CardButtonIllustration,
} from './CardButtonWithIllustration.style'

export const CardButtonWithIllustration = React.forwardRef<
  HTMLButtonElement,
  CardButtonWithIllustrationProps
>((props, ref) => {
  const { title, illustration, description, markdown, ...rest } = props

  return (
    <CardButtonWithIllustrationContainer {...rest} spacing="regular" ref={ref}>
      <CardButtonIllustration
        src={illustration}
        alt={title}
        data-disabled={props.disabled}
      />
      <Title type="regular" markdown={markdown}>
        {title}
      </Title>
      <Text markdown={markdown}>{description}</Text>
    </CardButtonWithIllustrationContainer>
  )
})

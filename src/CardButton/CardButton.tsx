import * as React from 'react'

import { BackgroundThemeProvider } from '../_internal/theme/BackgroundThemeProvider'
import { Text } from '../Text'
import { Title } from '../Title'
import { useCurrentBackground } from '../useCurrentBackground'
import { useThemeVariant } from '../useThemeVariant'

import { CardButtonProps } from './CardButton.interface'
import { CardButtonContainer, CardButtonIllustration } from './CardButton.style'

export const CardButton = React.forwardRef<HTMLButtonElement, CardButtonProps>(
  (props, ref) => {
    const defaultBackground = useCurrentBackground()
    const theme = useThemeVariant()

    const {
      title,
      illustration,
      description,
      markdown,
      outline = false,
      disabled,
      backgroundColor: rawBackgroundColor = defaultBackground,
      ...rest
    } = props

    const backgroundColor = disabled
      ? theme.neutralColor.withIntensityFading[300]
      : rawBackgroundColor

    return (
      <BackgroundThemeProvider backgroundColor={backgroundColor}>
        <CardButtonContainer
          ref={ref}
          {...rest}
          data-outline={outline}
          disabled={disabled}
        >
          <CardButtonIllustration src={illustration} alt={title} />
          <Title type="regular" markdown={markdown}>
            {title}
          </Title>
          <Text markdown={markdown}>{description}</Text>
        </CardButtonContainer>
      </BackgroundThemeProvider>
    )
  }
)

import * as React from 'react'

import Icon from '../Icon'
import useTheme from '../useTheme'

import NavigationButtonProps from './NavigationButton.interface'
import { NavigationButtonContainer } from './NavigationButton.style'

const NavigationButton = React.forwardRef<
  HTMLButtonElement,
  NavigationButtonProps
>((props, ref) => {
  const { previous, large, small, ...rest } = props

  const theme = useTheme()

  const icon = previous ? 'arrow-west' : 'arrow-east'

  return (
    <NavigationButtonContainer
      ref={ref}
      data-large={large}
      data-small={small}
      data-background={theme.backgroundColor !== '#FFFFFF'}
      {...rest}
    >
      <Icon icon={icon} />
    </NavigationButtonContainer>
  )
})

export default NavigationButton

import * as React from 'react'

import Icon from '../Icon'
import useTheme from '../useTheme'

import NavigationButtonProps from './NavigationButton.interface'
import { NavigationButtonContainer } from './NavigationButton.style'

const NavigationButton: React.FunctionComponent<NavigationButtonProps> = ({
  previous,
  large,
  small,
  ...props
}) => {
  const theme = useTheme()

  const icon = previous ? 'arrow-west' : 'arrow-east'

  return (
    <NavigationButtonContainer
      data-large={large}
      data-small={small}
      data-background={theme.backgroundColor !== '#FFFFFF'}
      {...props}
    >
      <Icon icon={icon} />
    </NavigationButtonContainer>
  )
}

export default NavigationButton

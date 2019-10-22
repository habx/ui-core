import * as React from 'react'

import Icon from '../Icon'
import useTheme from '../useTheme'

import NavigationButtonProps from './NavigationButton.interface'
import { NavigationButtonContainer } from './NavigationButton.style'

const getIcon = (usage: 'navigation' | 'toggle', previous?: boolean) => {
  switch (usage) {
    case 'navigation': {
      return previous ? 'arrow-west' : 'arrow-east'
    }

    case 'toggle': {
      return previous ? 'chevron-west' : 'chevron-east'
    }

    default: {
      return ''
    }
  }
}

const NavigationButton = React.forwardRef<
  HTMLButtonElement,
  NavigationButtonProps
>((props, ref) => {
  const { previous, large, small, usage = 'navigation', ...rest } = props

  const theme = useTheme()

  return (
    <NavigationButtonContainer
      ref={ref}
      data-large={large}
      data-small={small}
      data-background={theme.backgroundColor !== '#FFFFFF'}
      data-usage={usage}
      {...rest}
    >
      <Icon icon={getIcon(usage, previous)} />
    </NavigationButtonContainer>
  )
})

export default NavigationButton

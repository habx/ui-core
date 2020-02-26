import * as React from 'react'

import useHasColoredBackground from '../_internal/useHasColoredBackground'
import Icon from '../Icon'

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
  const {
    previous = false,
    large = false,
    small = false,
    usage = 'navigation',
    type = 'button',
    ...rest
  } = props

  const hasBackground = useHasColoredBackground()

  return (
    <NavigationButtonContainer
      ref={ref}
      data-large={large}
      data-small={small}
      data-background={hasBackground}
      data-usage={usage}
      type={type}
      {...rest}
    >
      <Icon icon={getIcon(usage, previous)} />
    </NavigationButtonContainer>
  )
})

export default NavigationButton

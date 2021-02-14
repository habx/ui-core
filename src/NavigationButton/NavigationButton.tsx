import * as React from 'react'

import { Icon } from '../Icon'
import { useHasColoredBackground } from '../useHasColoredBackground'

import { NavigationButtonProps } from './NavigationButton.interface'
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

/**
 * @deprecated Will be removed in 6.0, replace with RoundIconButton or IconButton. Replace `previous` with `icon='arrow-west'` or `icon='chevron-west` and `next` with `icon='arrow-east'` or `icon='chevron-east`
 */
export const NavigationButton = React.forwardRef<
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

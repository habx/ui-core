import * as React from 'react'

import { Icon } from '../Icon'

import { RoundIconButtonProps } from './RoundIconButton.interface'
import { RoundIconButtonContainer } from './RoundIconButton.style'

export const RoundIconButton = React.forwardRef<
  HTMLButtonElement,
  RoundIconButtonProps
>((props, ref) => {
  const { icon, large, small, ...rest } = props

  return (
    <RoundIconButtonContainer
      ref={ref}
      data-small={small}
      data-large={large}
      {...rest}
    >
      <Icon icon={icon} />
    </RoundIconButtonContainer>
  )
})

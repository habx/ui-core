import * as React from 'react'

import { FloatingButtonProps } from './FloatingButton.interface'
import { FloatingButtonContainer } from './FloatingButton.style'

export const FloatingButton = React.forwardRef<
  HTMLButtonElement,
  FloatingButtonProps
>((props, ref) => {
  const { fixed = false, position = 'bottom', ...rest } = props

  return (
    <FloatingButtonContainer
      ref={ref}
      {...rest}
      data-fixed={fixed}
      data-position={position}
    />
  )
})

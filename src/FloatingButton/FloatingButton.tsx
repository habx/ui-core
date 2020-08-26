import * as React from 'react'

import FloatingButtonProps from './FloatingButton.interface'
import {
  FloatingButtonContainer,
  FloatingButtonContent,
  SideElementContainer,
} from './FloatingButton.style'

export const FloatingButton = React.forwardRef<
  HTMLButtonElement,
  FloatingButtonProps
>((props, ref) => {
  const {
    children,
    elementLeft,
    elementRight,
    small = false,
    fixed = false,
    position = 'bottom',
    type = 'button',
    ...rest
  } = props

  return (
    <FloatingButtonContainer
      ref={ref}
      {...rest}
      data-small={small}
      data-fixed={fixed}
      data-position={position}
      type={type}
    >
      {elementLeft && (
        <SideElementContainer
          data-position="left"
          data-testid="element-left-container"
        >
          {elementLeft}
        </SideElementContainer>
      )}
      <FloatingButtonContent data-testid="label-container">
        {children}
      </FloatingButtonContent>
      {elementRight && (
        <SideElementContainer
          data-position="right"
          data-testid="element-right-container"
        >
          {elementRight}
        </SideElementContainer>
      )}
    </FloatingButtonContainer>
  )
})

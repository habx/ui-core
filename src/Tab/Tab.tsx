import * as React from 'react'

import { useHasColoredBackground } from '../_internal/useHasColoredBackground'

import { TabProps } from './Tab.interface'
import { TabContainer, SideElementContainer } from './Tab.style'

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  (props, ref) => {
    const {
      large = false,
      active = false,
      type = 'button',
      elementLeft,
      elementRight,
      children,
      ...rest
    } = props

    const hasBackground = useHasColoredBackground()

    return (
      <TabContainer
        ref={ref}
        data-large={large}
        data-active={active}
        data-background={hasBackground}
        type={type}
        {...rest}
      >
        {elementLeft && (
          <SideElementContainer
            data-position="left"
            data-testid="element-left-container"
          >
            {elementLeft}
          </SideElementContainer>
        )}
        {children}
        {elementRight && (
          <SideElementContainer
            data-position="right"
            data-testid="element-right-container"
          >
            {elementRight}
          </SideElementContainer>
        )}
      </TabContainer>
    )
  }
)

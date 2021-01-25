import * as React from 'react'

import { TabProps } from './Tab.interface'
import { TabContainer, TabContent, SideElementContainer } from './Tab.style'

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  (props, ref) => {
    const {
      large = false,
      small = false,
      active = false,
      type = 'button',
      elementLeft,
      elementRight,
      children,
      ...rest
    } = props

    return (
      <TabContainer
        ref={ref}
        data-large={large}
        data-small={small}
        data-active={active}
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
        <TabContent>{children}</TabContent>
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

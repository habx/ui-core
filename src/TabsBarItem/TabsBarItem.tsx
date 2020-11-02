import * as React from 'react'

import { TabsBarItemProps } from './TabsBarItem.interface'
import { TabsBarItemContainer, SideElementContainer } from './TabsBarItem.style'

export const TabsBarItem = React.forwardRef<HTMLLIElement, TabsBarItemProps>(
  (props, ref) => {
    const {
      children,
      elementLeft,
      elementRight,
      active = false,
      disabled = false,
      ...rest
    } = props

    return (
      <TabsBarItemContainer
        ref={ref}
        data-testid="tabsBar-container"
        data-active={active}
        data-disabled={disabled}
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
      </TabsBarItemContainer>
    )
  }
)

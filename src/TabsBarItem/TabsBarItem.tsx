import * as React from 'react'

import TabsBarItemProps from './TabsBarItem.interface'
import { TabsBarItemContainer } from './TabsBarItem.style'

const TabsBarItem = React.forwardRef<HTMLLIElement, TabsBarItemProps>(
  (props, ref) => {
    const { children, active = false, disabled = false, ...rest } = props

    return (
      <TabsBarItemContainer
        ref={ref}
        data-testid="tabsBar-container"
        data-active={active}
        data-disabled={disabled}
        {...rest}
      >
        {children}
      </TabsBarItemContainer>
    )
  }
)

export default TabsBarItem

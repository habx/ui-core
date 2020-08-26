import * as React from 'react'

import TabsBarProps from './TabsBar.interface'
import { TabsBarContainer } from './TabsBar.style'

export const TabsBar = React.forwardRef<HTMLUListElement, TabsBarProps>(
  (props, ref) => {
    const { children, ...rest } = props

    return (
      <TabsBarContainer ref={ref} data-testid="tabsBar-container" {...rest}>
        {children}
      </TabsBarContainer>
    )
  }
)

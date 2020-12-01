import * as React from 'react'

import { Menu } from '../Menu'
import { TabsBarItem } from '../TabsBarItem'

import { TabsBarMenuItemProps } from './TabsBarMenuItem.interface'

export const TabsBarMenuItem = React.forwardRef<
  HTMLLIElement,
  TabsBarMenuItemProps
>(({ children, label, ...props }, ref) => (
  <Menu
    position="vertical"
    triggerElement={
      <TabsBarItem {...props} ref={ref}>
        {label}
      </TabsBarItem>
    }
  >
    {children}
  </Menu>
))

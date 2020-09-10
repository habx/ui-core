import * as React from 'react'

import Menu from '../Menu'
import TabsBarItem from '../TabsBarItem'

import TabsBarMenuItemProps from './TabsBarMenuItem.interface'

export const TabsBarMenuItem = React.forwardRef<
  HTMLUListElement,
  TabsBarMenuItemProps
>(({ children, label, ...props }, ref) => (
  <Menu
    position="vertical"
    ref={ref}
    triggerElement={<TabsBarItem {...props}>{label}</TabsBarItem>}
  >
    {children}
  </Menu>
))

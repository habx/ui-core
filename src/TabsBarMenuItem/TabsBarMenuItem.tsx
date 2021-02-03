import * as React from 'react'

import { Icon } from '../Icon'
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
      <TabsBarItem
        elementRight={<Icon icon="chevron-south" />}
        {...props}
        ref={ref}
      >
        {label}
      </TabsBarItem>
    }
  >
    {children}
  </Menu>
))

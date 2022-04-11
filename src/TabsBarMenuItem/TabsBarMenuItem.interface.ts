import * as React from 'react'

import { MenuProps } from '../Menu'
import { TabsBarItemProps } from '../TabsBarItem'

export interface TabsBarMenuItemProps
  extends Omit<TabsBarItemProps, 'children'> {
  children: MenuProps['children']
  label: React.ReactNode
}

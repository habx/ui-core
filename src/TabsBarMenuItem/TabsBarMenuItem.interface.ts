import * as React from 'react'

import { MenuProps } from '../Menu'
import { TabsBarItemProps } from '../TabsBarItem'

export interface TabsBarMenuItemProps extends TabsBarItemProps {
  children: MenuProps['children']
  label: React.ReactNode
}

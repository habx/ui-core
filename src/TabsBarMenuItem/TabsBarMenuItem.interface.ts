import * as React from 'react'

import MenuProps from '../Menu/Menu.interface'
import { TabsBarItemProps } from '../TabsBarItem'

export default interface TabsBarMenuItemProps extends TabsBarItemProps {
  children: MenuProps['children']
  label: React.ReactNode
}

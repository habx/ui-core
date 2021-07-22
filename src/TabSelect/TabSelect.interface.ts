import { TabProps } from '../Tab/Tab.interface'

export interface TabSelectProps
  extends Omit<TabProps, 'elementRight' | 'elementLeft' | 'active'> {
  children: SimplifiedTabProps
}

export interface SimplifiedTabProps extends Omit<TabProps, 'small' | 'large'> {}

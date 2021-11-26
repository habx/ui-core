import { TabProps } from '../Tab/Tab.interface'

export interface TabSelectProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Pick<TabProps, 'large' | 'small'> {
  fullWidth?: boolean
}

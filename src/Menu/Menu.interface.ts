import { TogglePanelProps, Dimensions } from '../TogglePanel'

export type MenuPosition = 'horizontal' | 'vertical' | 'centered'

export type MenuPositionSetter = (dimensions: {
  triggerDimensions: Dimensions
  menuHeight: number
  menuWidth: number
  position: MenuPosition
}) => { top?: number; left?: number; right?: number; bottom?: number }

export interface MenuProps extends Omit<TogglePanelProps, 'setStyle'> {
  scrollable?: boolean
  position?: MenuPosition
  setPosition?: MenuPositionSetter
}

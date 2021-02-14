import { TogglePanelProps, Dimensions } from '../TogglePanel'

export type MenuPositionSetter = (dimensions: {
  triggerDimensions: Dimensions
  menuHeight: number
  menuWidth: number
  position: 'horizontal' | 'vertical'
}) => { top?: number; left?: number; right?: number; bottom?: number }

export interface MenuProps extends Omit<TogglePanelProps, 'setStyle'> {
  scrollable?: boolean
  position?: 'horizontal' | 'vertical'
  setPosition?: MenuPositionSetter
}

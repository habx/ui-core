import { TogglePanelProps } from '../TogglePanel'
import { Dimensions } from '../TogglePanel/TogglePanel'
import { WithTriggerElement } from '../withTriggerElement'

export interface MenuInstance {
  open: boolean
  onClose: () => void
}

export interface InnerMenuProps
  extends Omit<TogglePanelProps, 'setStyle' | keyof MenuInstance>,
    MenuInstance {
  scrollable?: boolean
  position?: 'horizontal' | 'vertical'
  setPosition?: (dimensions: {
    triggerDimensions: Dimensions
    menuHeight: number
    menuWidth: number
  }) => { top?: number; left?: number; right?: number; bottom?: number }
}

export type MenuProps = WithTriggerElement<InnerMenuProps, HTMLDivElement>

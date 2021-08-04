import { TogglePanelProps, Dimensions } from '../TogglePanel'

/**
 * - `'horizontal'`
 *
 * Positions the menu at the right or at the left of the trigger.
 * There is an affinity for the right positioning, whenever the menu can fit in both directions.
 * If neither sides can host the entire menu, the one with the most space is picked and the menu is constrain by width.
 *
 * In the vertical dimension, the menu sticks to the top or the bottom of the trigger, using the same logic.
 * The top alignment takes precedence.over the bottom one.
 *
 * - `'vertical'`
 *
 * The positioning of the menu is transposed from `horizontal`.
 * More specifically, the bottom-left corner is favored.
 *
 * - `'vertical-centered'`
 *
 * Same as `'vertical'`, except the menu is centered horizontally with regard to the trigger.
 *
 * - `'vertical-stretched'`
 *
 * Same as `'vertical'`, except the menu is set to be as large as the trigger horizontally.
 */
export type MenuPosition =
  | 'horizontal'
  | 'vertical'
  | 'vertical-centered'
  | 'vertical-stretched'

/** @deprecated Replaced by `'vertical-centered'`. */
type MenuPositionLegacy = 'centered'

export type MenuPositionSetter = (dimensions: {
  triggerDimensions: Dimensions
  menuHeight: number
  menuWidth: number
  // eslint-disable-next-line deprecation/deprecation
  position: MenuPosition | MenuPositionLegacy
}) => { top?: number; left?: number; right?: number; bottom?: number }

export interface MenuProps extends Omit<TogglePanelProps, 'setStyle'> {
  scrollable?: true
  // eslint-disable-next-line deprecation/deprecation
  position?: MenuPosition | MenuPositionLegacy
  /** This method must be static or memoized. */
  setPosition?: MenuPositionSetter
}

import { MenuPositionSetter } from './Menu.interface'

const MENU_DEFAULT_POSITION_SETTER_TRIGGER_MARGIN = 8

export const menuDefaultPositionSetter: MenuPositionSetter = ({
  triggerDimensions,
  menuHeight,
  menuWidth,
  position,
}) => {
  switch (position) {
    case 'vertical': {
      let top: number | undefined = undefined
      let bottom: number | undefined = undefined
      let left: number | undefined = undefined
      let right: number | undefined = undefined

      const topWithMenuBelowTrigger =
        triggerDimensions.bottom + MENU_DEFAULT_POSITION_SETTER_TRIGGER_MARGIN

      const isMenuBelowTriggerOverflowing =
        topWithMenuBelowTrigger + menuHeight > window.innerHeight
      if (isMenuBelowTriggerOverflowing) {
        const bottomWithMenuAboveTrigger =
          window.innerHeight -
          triggerDimensions.bottom +
          triggerDimensions.height +
          MENU_DEFAULT_POSITION_SETTER_TRIGGER_MARGIN

        const isMenuAboveTriggerOverflowing =
          bottomWithMenuAboveTrigger + menuHeight > window.innerHeight
        if (isMenuAboveTriggerOverflowing) {
          // If the menu can't be placed without vertical overflowing then we place it below the trigger
          top = topWithMenuBelowTrigger
        } else {
          // If the menu is only overflowing if placed below, then we place it above the trigger
          bottom = bottomWithMenuAboveTrigger
        }
      } else {
        // If the menu is not overflowing if placed below, then we place it below the trigger
        top = topWithMenuBelowTrigger
      }

      let leftWithMenuAlignedLeft = triggerDimensions.left

      const isMenuAlignedLeftOverflowing =
        leftWithMenuAlignedLeft + menuWidth > window.innerWidth
      if (isMenuAlignedLeftOverflowing) {
        const rightWithMenuAlignedRight =
          window.innerWidth - triggerDimensions.right

        const isMenuAlignedRightOverflowing =
          rightWithMenuAlignedRight + menuWidth > window.innerWidth
        if (isMenuAlignedRightOverflowing) {
          // If the menu can't be placed without horizontal overflowing then we aligned it on the left of the trigger
          left = leftWithMenuAlignedLeft
        } else {
          // If the menu is only overflowing if aligned on the left, the we align it on the right
          right = rightWithMenuAlignedRight
        }
      } else {
        // If the menu is not overflowing if aligned on the right, then we align it on the right
        left = leftWithMenuAlignedLeft
      }

      return { top, bottom, left, right, minWidth: triggerDimensions.width }
    }

    case 'horizontal': {
      let top: number | undefined = undefined
      let bottom: number | undefined = undefined
      let left: number | undefined = undefined
      let right: number | undefined = undefined

      const leftWithMenuRightOfTrigger =
        triggerDimensions.right + MENU_DEFAULT_POSITION_SETTER_TRIGGER_MARGIN

      const isMenuRightOfTriggerOverflowing =
        leftWithMenuRightOfTrigger + menuWidth > window.innerWidth
      if (isMenuRightOfTriggerOverflowing) {
        const rightWithMenuLeftOfTrigger =
          window.innerWidth -
          triggerDimensions.right +
          triggerDimensions.width +
          MENU_DEFAULT_POSITION_SETTER_TRIGGER_MARGIN

        const isMenuLeftOfTriggerOverflowing =
          rightWithMenuLeftOfTrigger + menuWidth > window.innerWidth
        if (isMenuLeftOfTriggerOverflowing) {
          // If the menu can't be placed without horizontal overflowing then we place it on the right of the trigger
          left = leftWithMenuRightOfTrigger
        } else {
          // If the menu is only overflowing if placed on the right, then we place it on the left of the trigger
          right = rightWithMenuLeftOfTrigger
        }
      } else {
        // If the menu is not overflowing if placed on the right, then we place it on the right of the trigger
        left = leftWithMenuRightOfTrigger
      }

      let bottomWithMenuAlignedBottom =
        window.innerHeight - triggerDimensions.bottom

      const isMenuAlignedBottomOverflowing =
        bottomWithMenuAlignedBottom + menuHeight > window.innerWidth
      if (isMenuAlignedBottomOverflowing) {
        const topWithMenuAlignedTop = triggerDimensions.top

        const isMenuAlignedTopOverflowing =
          topWithMenuAlignedTop + menuHeight > window.innerWidth
        if (isMenuAlignedTopOverflowing) {
          // If the menu can't be placed without vertical overflowing then we aligned it on the bottom of the trigger
          bottom = bottomWithMenuAlignedBottom
        } else {
          // If the menu is only overflowing if aligned on the bottom, the we align it on the top
          top = topWithMenuAlignedTop
        }
      } else {
        // If the menu is not overflowing if aligned on the bottom, then we align it on the bottom
        bottom = bottomWithMenuAlignedBottom
      }

      return { top, bottom, left, right }
    }

    default: {
      throw Error('Invalid menu position')
    }
  }
}

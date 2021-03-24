import { MenuPositionSetter } from './Menu.interface'

const MENU_DEFAULT_POSITION_SETTER_TRIGGER_MARGIN = 8

export const menuDefaultPositionSetter: MenuPositionSetter = ({
  triggerDimensions,
  menuHeight,
  menuWidth,
  position,
}) => {
  const innerHeight = window.innerHeight
  const innerWidth = window.innerWidth
  const verticalScrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth
  const horizontalScrollBarHeight =
    window.innerHeight - document.documentElement.clientHeight

  switch (position) {
    case 'vertical': {
      let top: number | undefined = undefined
      let bottom: number | undefined = undefined
      let left: number | undefined = undefined
      let right: number | undefined = undefined

      const topWithMenuBelowTrigger =
        triggerDimensions.bottom + MENU_DEFAULT_POSITION_SETTER_TRIGGER_MARGIN

      const isMenuBelowTriggerOverflowing =
        topWithMenuBelowTrigger + menuHeight > innerHeight
      if (isMenuBelowTriggerOverflowing) {
        const bottomWithMenuAboveTrigger =
          innerHeight -
          triggerDimensions.bottom +
          triggerDimensions.height -
          verticalScrollBarWidth +
          MENU_DEFAULT_POSITION_SETTER_TRIGGER_MARGIN

        const isMenuAboveTriggerOverflowing =
          bottomWithMenuAboveTrigger + menuHeight > innerHeight
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
        leftWithMenuAlignedLeft + menuWidth > innerWidth
      if (isMenuAlignedLeftOverflowing) {
        const rightWithMenuAlignedRight =
          innerWidth - triggerDimensions.right - verticalScrollBarWidth

        const isMenuAlignedRightOverflowing =
          rightWithMenuAlignedRight + menuWidth > innerWidth
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
        leftWithMenuRightOfTrigger + menuWidth > innerWidth
      if (isMenuRightOfTriggerOverflowing) {
        const rightWithMenuLeftOfTrigger =
          innerWidth -
          triggerDimensions.right +
          triggerDimensions.width +
          MENU_DEFAULT_POSITION_SETTER_TRIGGER_MARGIN

        const isMenuLeftOfTriggerOverflowing =
          rightWithMenuLeftOfTrigger + menuWidth > innerWidth
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
        innerHeight - triggerDimensions.bottom - horizontalScrollBarHeight

      const isMenuAlignedBottomOverflowing =
        bottomWithMenuAlignedBottom + menuHeight > innerWidth
      if (isMenuAlignedBottomOverflowing) {
        const topWithMenuAlignedTop = triggerDimensions.top

        const isMenuAlignedTopOverflowing =
          topWithMenuAlignedTop + menuHeight > innerWidth
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

    case 'centered': {
      let top: number | undefined = undefined
      let bottom: number | undefined = undefined
      const left =
        triggerDimensions.left + (triggerDimensions.width - menuWidth) / 2

      const topWithMenuBelowTrigger =
        triggerDimensions.bottom + MENU_DEFAULT_POSITION_SETTER_TRIGGER_MARGIN

      const isMenuBelowTriggerOverflowing =
        topWithMenuBelowTrigger + menuHeight > innerHeight
      if (isMenuBelowTriggerOverflowing) {
        const bottomWithMenuAboveTrigger =
          innerHeight -
          triggerDimensions.bottom +
          triggerDimensions.height -
          verticalScrollBarWidth +
          MENU_DEFAULT_POSITION_SETTER_TRIGGER_MARGIN

        const isMenuAboveTriggerOverflowing =
          bottomWithMenuAboveTrigger + menuHeight > innerHeight
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

      return { top, bottom, left }
    }

    default: {
      throw Error('Invalid menu position')
    }
  }
}

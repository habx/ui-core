import { MenuPositionSetter } from './Menu.interface'

const MARGIN = 8

export const menuDefaultPositionSetter: MenuPositionSetter = ({
  triggerDimensions,
  menuHeight,
  menuWidth,
  position,
}) => {
  const { clientHeight, clientWidth } = document.documentElement

  let bottom: number | undefined
  let left: number | undefined
  let right: number | undefined
  let top: number | undefined

  switch (position) {
    case 'horizontal': {
      const rightOfTrigger = triggerDimensions.right + MARGIN
      const spaceAtRightOfTrigger = clientWidth - rightOfTrigger - MARGIN

      if (menuWidth > spaceAtRightOfTrigger) {
        const leftOfTrigger = triggerDimensions.left - MARGIN
        const spaceAtLeftOfTrigger = leftOfTrigger - MARGIN

        if (menuWidth > spaceAtLeftOfTrigger) {
          // Place the menu where there is more room and constrains its width.
          if (spaceAtLeftOfTrigger > spaceAtRightOfTrigger) {
            left = MARGIN
            right = clientWidth - leftOfTrigger
          } else {
            left = rightOfTrigger
            right = MARGIN
          }
        } else {
          right = clientWidth - leftOfTrigger
        }
      } else {
        left = rightOfTrigger
      }

      if (menuHeight + 2 * MARGIN > clientHeight) {
        bottom = MARGIN
        top = MARGIN
      } else {
        const spaceFromTopOfTrigger =
          clientHeight - triggerDimensions.top - MARGIN

        if (menuHeight > spaceFromTopOfTrigger) {
          const spaceToBottomOfTrigger = triggerDimensions.bottom - MARGIN

          if (menuHeight > spaceToBottomOfTrigger) {
            if (spaceToBottomOfTrigger > spaceFromTopOfTrigger) {
              top = MARGIN
            } else {
              bottom = MARGIN
            }
          } else {
            bottom = clientHeight - triggerDimensions.bottom
          }
        } else {
          top = triggerDimensions.top
        }
      }

      return { top, right, bottom, left }
    }

    case 'centered':
    case 'vertical':
    case 'vertical-centered':
    case 'vertical-stretched': {
      let minWidth: number | undefined

      const bottomOfTrigger = triggerDimensions.bottom
      const spaceBelowTrigger = clientHeight - bottomOfTrigger - MARGIN

      if (menuHeight > spaceBelowTrigger) {
        const topOfTrigger = triggerDimensions.top
        const spaceAboveTrigger = topOfTrigger - MARGIN

        if (menuHeight > spaceAboveTrigger) {
          // Place the menu where there is more room and constrains its height.
          if (spaceAboveTrigger > spaceBelowTrigger) {
            bottom = clientHeight - topOfTrigger
            top = MARGIN
          } else {
            bottom = MARGIN
            top = bottomOfTrigger
          }
        } else {
          bottom = clientHeight - topOfTrigger
        }
      } else {
        top = bottomOfTrigger
      }

      if (menuWidth + 2 * MARGIN > clientWidth) {
        left = MARGIN
        right = MARGIN
      } else if (position === 'centered' || position === 'vertical-centered') {
        const menuCenterOffset = (menuWidth - triggerDimensions.width) / 2
        const spaceAtRightOfTrigger =
          clientWidth - triggerDimensions.right - MARGIN

        if (menuCenterOffset > spaceAtRightOfTrigger) {
          right = 0
        } else {
          const spaceAtLeftOfTrigger = triggerDimensions.left - MARGIN

          if (menuCenterOffset > spaceAtLeftOfTrigger) {
            left = 0
          } else {
            left = triggerDimensions.left - menuCenterOffset
          }
        }
      } else {
        const spaceFromLeftOfTrigger =
          clientWidth - triggerDimensions.left - MARGIN

        if (menuWidth > spaceFromLeftOfTrigger) {
          const spaceToRightOfTrigger = triggerDimensions.right - MARGIN

          if (menuWidth > spaceToRightOfTrigger) {
            if (spaceToRightOfTrigger > spaceFromLeftOfTrigger) {
              left = 0
            } else {
              right = 0
            }
          } else {
            right = clientWidth - triggerDimensions.right
          }
        } else {
          left = triggerDimensions.left
        }

        if (position === 'vertical-stretched') {
          minWidth = triggerDimensions.width
        }
      }

      return { top, right, bottom, left, minWidth }
    }

    default: {
      throw Error('Invalid menu position')
    }
  }
}

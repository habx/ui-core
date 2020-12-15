import { Modal } from '@delangle/use-modal'
import * as React from 'react'

import { isFunction } from '../_internal/data'
import { useWindowSize } from '../_internal/useWindowSize'
import { breakpoints } from '../breakpoints'
import { TogglePanel, TogglePanelProps } from '../TogglePanel'

import { MenuProps, PositionSetter } from './Menu.interface'
import {
  FloatingMenuContainer,
  FloatingMenu,
  FullScreenMenu,
} from './Menu.style'

const TRIGGER_MARGIN = 8

const defaultPositionSetter: PositionSetter = ({
  triggerDimensions,
  menuHeight,
  menuWidth,
  position,
}) => {
  if (position === 'vertical') {
    let top = triggerDimensions.bottom + TRIGGER_MARGIN

    if (top + menuHeight > window.innerHeight) {
      const topWithMenuAboveTrigger =
        triggerDimensions.top - TRIGGER_MARGIN - menuHeight

      if (topWithMenuAboveTrigger > 0) {
        top = topWithMenuAboveTrigger
      }
    }

    let left =
      triggerDimensions.left + menuWidth > window.innerWidth
        ? triggerDimensions.left - menuWidth + triggerDimensions.width
        : triggerDimensions.left

    return { top, left, minWidth: triggerDimensions.width }
  }

  const top =
    triggerDimensions.top + menuHeight > window.innerHeight
      ? triggerDimensions.top + triggerDimensions.height - menuHeight
      : triggerDimensions.top

  let left = triggerDimensions.right + TRIGGER_MARGIN

  if (left + menuWidth > window.innerWidth) {
    const leftWithMenuLeftOfTrigger =
      triggerDimensions.left - menuWidth - TRIGGER_MARGIN

    if (leftWithMenuLeftOfTrigger > 0) {
      left = leftWithMenuLeftOfTrigger
    }
  }

  return { top, left }
}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      children,
      fullScreenOnMobile = false,
      position = 'vertical',
      scrollable = false,
      setPosition = defaultPositionSetter,
      ...props
    },
    ref
  ) => {
    const size = useWindowSize()

    const getChildren = React.useCallback(
      (modal: Modal<HTMLDivElement>) => {
        const content = isFunction(children) ? children(modal) : children

        if (fullScreenOnMobile && size.width < breakpoints.raw.phone) {
          return <FullScreenMenu>{content}</FullScreenMenu>
        }

        return (
          <FloatingMenuContainer>
            <FloatingMenu data-scrollable={scrollable}>{content}</FloatingMenu>
          </FloatingMenuContainer>
        )
      },
      [children, fullScreenOnMobile, scrollable, size.width]
    )

    const setStyle = React.useCallback<Required<TogglePanelProps>['setStyle']>(
      (dimensions, triggerDimensions) => {
        const menuHeight = dimensions.clientHeight
        const menuWidth = dimensions.clientWidth

        return setPosition({
          triggerDimensions,
          menuHeight,
          menuWidth,
          position,
        })
      },
      [position, setPosition]
    )

    return (
      <TogglePanel
        children={getChildren}
        data-testid="menu-container"
        fullScreenOnMobile={fullScreenOnMobile}
        ref={ref}
        setStyle={setStyle}
        {...props}
      />
    )
  }
)

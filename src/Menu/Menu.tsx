import { Modal } from '@delangle/use-modal'
import * as React from 'react'

import { isFunction } from '../_internal/data'
import { buildUseOnlyOpenedInstanceHook } from '../_internal/useOnlyOpenedInstance'
import { useWindowSize } from '../_internal/useWindowSize'
import { breakpoints } from '../breakpoints'
import { TogglePanel } from '../TogglePanel'
import { withTriggerElement } from '../withTriggerElement'

import { MenuInstance, InnerMenuProps } from './Menu.interface'
import { FloatingMenu, FullScreenMenu } from './Menu.style'

const TRIGGER_MARGIN = 12

const useOnlyOneMenuOpened = buildUseOnlyOpenedInstanceHook<MenuInstance>()

export const InnerMenu = React.forwardRef<HTMLDivElement, InnerMenuProps>(
  (
    {
      children,
      fullScreenOnMobile = false,
      onClose,
      open,
      position = 'vertical',
      scrollable = false,
      setPosition,
      ...props
    },
    ref
  ) => {
    useOnlyOneMenuOpened({ open, onClose })

    const size = useWindowSize()

    const getChildren = React.useCallback(
      (modal: Modal<HTMLDivElement>) => {
        const content = isFunction(children) ? children(modal) : children

        return fullScreenOnMobile && size.width < breakpoints.raw.phone ? (
          <FullScreenMenu>{content}</FullScreenMenu>
        ) : (
          <FloatingMenu data-scrollable={scrollable}>{content}</FloatingMenu>
        )
      },
      [children]
    )

    const setStyle = React.useCallback(
      (dimensions: DOMRect, triggerDimensions: DOMRect) => {
        const menuHeight = triggerDimensions.height
        const menuWidth = triggerDimensions.width

        if (isFunction(setPosition)) {
          return setPosition({ triggerDimensions, menuHeight, menuWidth })
        }

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
      },
      [position, setPosition]
    )

    return (
      <TogglePanel
        children={getChildren}
        data-testid="menu-container"
        fullScreenOnMobile={fullScreenOnMobile}
        open={open}
        onClose={onClose}
        ref={ref}
        setStyle={setStyle}
        {...props}
      />
    )
  }
)

export const Menu = withTriggerElement({ fowardRef: true })(InnerMenu)

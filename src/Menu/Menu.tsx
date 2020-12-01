import { Modal } from '@delangle/use-modal'
import * as React from 'react'

import { isFunction } from '../_internal/data'
import { useCurrentBackground } from '../_internal/theme/useCurrentBackground'
import { buildUseOnlyOpenedInstanceHook } from '../_internal/useOnlyOpenedInstance'
import { useWindowSize } from '../_internal/useWindowSize'
import { breakpoints } from '../breakpoints'
import { TogglePanel, TogglePanelProps } from '../TogglePanel'
import { withTriggerElement } from '../withTriggerElement'

import { MenuContext } from './Menu.context'
import { MenuInstance, InnerMenuProps } from './Menu.interface'
import {
  FloatingMenuContainer,
  FloatingMenu,
  FullScreenMenu,
} from './Menu.style'

const TRIGGER_MARGIN = 8

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
    const background = useCurrentBackground({ useRootTheme: true })

    const getChildren = React.useCallback(
      (modal: Modal<HTMLDivElement>) => {
        const content = isFunction(children) ? children(modal) : children

        return (
          <MenuContext.Provider value={{ close: onClose }}>
            {fullScreenOnMobile && size.width < breakpoints.raw.phone ? (
              <FullScreenMenu>{content}</FullScreenMenu>
            ) : (
              <FloatingMenuContainer backgroundColor={background}>
                <FloatingMenu data-scrollable={scrollable}>
                  {content}
                </FloatingMenu>
              </FloatingMenuContainer>
            )}
          </MenuContext.Provider>
        )
      },
      [
        background,
        children,
        fullScreenOnMobile,
        onClose,
        scrollable,
        size.width,
      ]
    )

    const setStyle = React.useCallback<Required<TogglePanelProps>['setStyle']>(
      (dimensions, triggerDimensions) => {
        const menuHeight = dimensions.clientHeight
        const menuWidth = dimensions.clientWidth

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

export const Menu = withTriggerElement<HTMLDivElement>({ forwardRef: true })(
  InnerMenu
)

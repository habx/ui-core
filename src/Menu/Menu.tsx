import { Modal } from '@delangle/use-modal'
import * as React from 'react'

import { isFunction } from '../_internal/data'
import { useWindowSize } from '../_internal/useWindowSize'
import { breakpoints } from '../breakpoints'
import { TogglePanel, TogglePanelStyleSetter } from '../TogglePanel'

import { MenuProps } from './Menu.interface'
import {
  FloatingMenuContainer,
  FloatingMenu,
  FullScreenMenu,
} from './Menu.style'
import { menuDefaultPositionSetter } from './Menu.utils'

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      children,
      fullScreenOnMobile = false,
      position = 'vertical',
      scrollable = false,
      setPosition = menuDefaultPositionSetter,
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

    const setStyle = React.useCallback<TogglePanelStyleSetter>(
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

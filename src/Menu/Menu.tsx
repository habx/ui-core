import { Modal } from '@delangle/use-modal'
import * as React from 'react'

import { isFunction } from '../_internal/data'
import { breakpoints } from '../breakpoints'
import { TogglePanel, TogglePanelStyleSetter } from '../TogglePanel'
import { useWindowWidth } from '../useWindowSize'

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
      position = 'vertical-stretched',
      scrollable,
      setPosition = menuDefaultPositionSetter,
      withOverlay,
      ...props
    },
    ref
  ) => {
    const width = useWindowWidth()

    const getChildren = React.useCallback(
      (modal: Modal<HTMLDivElement>) => {
        const content = isFunction(children) ? children(modal) : children

        if (fullScreenOnMobile && width < breakpoints.raw.phone) {
          return <FullScreenMenu>{content}</FullScreenMenu>
        }

        return (
          <FloatingMenuContainer>
            <FloatingMenu data-scrollable={scrollable}>{content}</FloatingMenu>
          </FloatingMenuContainer>
        )
      },
      [children, fullScreenOnMobile, scrollable, width]
    )

    const setStyle = React.useCallback<TogglePanelStyleSetter>(
      (dimensions, triggerDimensions) =>
        setPosition({
          triggerDimensions,
          menuHeight: dimensions.height,
          menuWidth: dimensions.width,
          position,
        }),
      [position, setPosition]
    )

    return (
      <TogglePanel
        children={getChildren}
        data-testid="menu-container"
        fullScreenOnMobile={fullScreenOnMobile}
        ref={ref}
        setStyle={setStyle}
        withOverlay={withOverlay}
        simulated
        {...props}
      />
    )
  }
)

import * as React from 'react'

import { useParentTogglePanel } from '../TogglePanel'
import { useThemeVariant } from '../useThemeVariant'

import { MenuLineProps } from './MenuLine.interface'
import {
  MenuLineContainer,
  MenuLineLabel,
  SideElementContainer,
} from './MenuLine.style'

export const MenuLine = React.forwardRef<HTMLLIElement, MenuLineProps>(
  (props, ref) => {
    const {
      children,
      active,
      elementLeft,
      error,
      elementRight,
      onClick,
      disabled,
      ...rest
    } = props
    const togglePanel = useParentTogglePanel()
    const theme = useThemeVariant()

    const color = error ? theme.colors.error.base : undefined

    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLLIElement>) => {
        togglePanel.close()
        if (onClick) {
          onClick(e)
        }
      },
      [onClick, togglePanel]
    )
    return (
      <MenuLineContainer
        ref={ref}
        {...rest}
        onClick={handleClick}
        data-disabled={disabled}
        data-active={active}
        data-error={error}
      >
        {elementLeft && (
          <SideElementContainer error={error} data-position="left">
            {elementLeft}
          </SideElementContainer>
        )}
        <MenuLineLabel color={color} variation="title">
          {children}
        </MenuLineLabel>
        {elementRight && (
          <SideElementContainer error={error} data-position="right">
            {elementRight}
          </SideElementContainer>
        )}
      </MenuLineContainer>
    )
  }
)

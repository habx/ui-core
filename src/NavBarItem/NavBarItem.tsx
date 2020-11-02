import * as React from 'react'

import { useMergedContext } from '../_internal/useMergedContext'
import { assert } from '../_internal/validityCheck'
import { NavBarContext } from '../NavBar/NavBar.context'

import { NavBarItemProps } from './NavBarItem.interface'
import {
  DescriptionContainer,
  IconContainer,
  NavBarItemContainer,
  TextContainer,
  TitleContainer,
} from './NavBarItem.style'

export const NavBarItem = React.forwardRef<HTMLLIElement, NavBarItemProps>(
  (props, ref) => {
    const {
      icon,
      label,
      isInsideANavBar,
      bottom,
      active,
      disabled,
      color,
      description,
      ...rest
    } = useMergedContext(NavBarContext, props)

    assert(
      isInsideANavBar,
      'ExpansionPanelItem should be used inside an ExpansionPanel'
    )

    return (
      <NavBarItemContainer
        data-testid="nav-bar-item"
        tabIndex={0}
        data-bottom={bottom}
        data-active={active}
        data-disabled={disabled}
        {...rest}
        ref={ref}
      >
        <IconContainer>{icon}</IconContainer>
        <TextContainer>
          <TitleContainer color={color}>{label}</TitleContainer>
          {description && (
            <DescriptionContainer color={color}>
              {description}
            </DescriptionContainer>
          )}
        </TextContainer>
      </NavBarItemContainer>
    )
  }
)

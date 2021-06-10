import * as React from 'react'

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
      bottom,
      active,
      disabled,
      description,
      ...rest
    } = props

    const { isInsideANavBar, isExpanded } = React.useContext(NavBarContext)

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
        data-expanded={isExpanded}
        {...rest}
        ref={ref}
      >
        <IconContainer>{icon}</IconContainer>
        <TextContainer>
          <TitleContainer variation="title">{label}</TitleContainer>
          {description && (
            <DescriptionContainer type="caption">
              {description}
            </DescriptionContainer>
          )}
        </TextContainer>
      </NavBarItemContainer>
    )
  }
)

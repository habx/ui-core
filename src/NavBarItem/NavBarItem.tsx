import * as React from 'react'

import useMergedContext from '../_internal/useMergedContext'
import { assert } from '../_internal/validityCheck'
import NavBarContext from '../NavBar/NavBar.context'

import NavBarItemProps from './NavBarItem.interface'
import {
  IconContainer,
  NavBarItemContainer,
  TitleContainer,
} from './NavBarItem.style'

const NavBarItem = React.forwardRef<HTMLLIElement, NavBarItemProps>(
  (props, ref) => {
    const {
      icon,
      label,
      isInsideANavBar,
      isExpanded,
      bottom,
      active,
      disabled,
      color,
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
        {isExpanded && <TitleContainer color={color}>{label}</TitleContainer>}
      </NavBarItemContainer>
    )
  }
)

export default NavBarItem

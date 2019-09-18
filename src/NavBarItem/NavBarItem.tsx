import * as React from 'react'

import useMergedContext from '../_internal/useMergedContext'
import { assert } from '../_internal/validityCheck'
import NavBarContext from '../NavBar/NavBar.context'

import NavBarItemProps from './NavBarItem.interface'
import {
  IconContainer,
  NavBarItemContainer,
  NavBarItemTooltip,
  NavBarItemTooltipContent,
} from './NavBarItem.style'

const NavBarItem = React.forwardRef<HTMLLIElement, NavBarItemProps>(
  (props, ref) => {
    const {
      icon,
      tooltip,
      activeBackgroundColor,
      isInsideANavBar,
      bottom,
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
        activebackgroundcolor={activeBackgroundColor as string}
        data-bottom={bottom}
        {...rest}
        ref={ref}
      >
        <IconContainer>{icon}</IconContainer>
        {tooltip && (
          <React.Fragment>
            <NavBarItemTooltip
              activebackgroundcolor={activeBackgroundColor as string}
            >
              <IconContainer>{icon}</IconContainer>
              <NavBarItemTooltipContent>{tooltip}</NavBarItemTooltipContent>
            </NavBarItemTooltip>
          </React.Fragment>
        )}
      </NavBarItemContainer>
    )
  }
)

export default NavBarItem

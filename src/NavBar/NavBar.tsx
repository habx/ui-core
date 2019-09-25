import * as React from 'react'

import Icon from '../Icon'
import useTheme from '../useTheme'

import GeometricalShapes from './GeometricalShapes'
import NavBarContext from './NavBar.context'
import NavBarProps from './NavBar.interface'
import {
  NavBarContainer,
  NavBarContent,
  NavBarHeader,
  NavBarPageLogo,
  NavBarItemsContainer,
  NavBarToggleButton,
} from './NavBar.style'

const NavBar = React.forwardRef<HTMLUListElement, NavBarProps>(
  (baseProps, ref) => {
    const theme = useTheme()

    const props = { ...baseProps, theme }

    const { children, title, ...rest } = props

    const [isExpanded, setExpanded] = React.useState(false)

    const handleToggle = React.useCallback(() => setExpanded(prev => !prev), [])

    const context = React.useMemo(
      () => ({ isInsideANavBar: true, isExpanded }),
      [isExpanded]
    )

    return (
      <NavBarContext.Provider value={context}>
        <NavBarContainer data-testid="nav-bar-container" {...rest} ref={ref}>
          <NavBarContent data-expanded={isExpanded}>
            <GeometricalShapes isExpanded={isExpanded} />
            <NavBarHeader>
              {isExpanded && <NavBarPageLogo>T</NavBarPageLogo>}
              <NavBarToggleButton onClick={handleToggle}>
                <Icon icon="hamburger-menu" />
              </NavBarToggleButton>
            </NavBarHeader>
            <NavBarItemsContainer>{children}</NavBarItemsContainer>
          </NavBarContent>
        </NavBarContainer>
      </NavBarContext.Provider>
    )
  }
)

export default NavBar

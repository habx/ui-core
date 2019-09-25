import * as React from 'react'

import Icon from '../Icon'
import palette from '../palette'
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

    const {
      children,
      title,
      color = palette.darkBlue[900],
      backgroundColor = palette.yellow[600],
      ...rest
    } = props

    const [isExpanded, setExpanded] = React.useState(false)

    const handleToggle = React.useCallback(() => setExpanded(prev => !prev), [])

    const context = React.useMemo(
      () => ({ isInsideANavBar: true, isExpanded, color }),
      [color, isExpanded]
    )

    return (
      <NavBarContext.Provider value={context}>
        <NavBarContainer data-testid="nav-bar-container" {...rest} ref={ref}>
          <NavBarContent
            data-expanded={isExpanded}
            color={color}
            backgroundColor={backgroundColor}
          >
            <GeometricalShapes isExpanded={isExpanded} />
            <NavBarHeader>
              {isExpanded && (
                <NavBarPageLogo color={color} type="caption">
                  {title}
                </NavBarPageLogo>
              )}
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

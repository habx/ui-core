import * as React from 'react'

import Icon from '../Icon'
import palette from '../palette'
import useTheme from '../useTheme'

import GeometricalShapes from './GeometricalShapes'
import NavBarContext from './NavBar.context'
import NavBarProps from './NavBar.interface'
import {
  NavBarContainer,
  NavBarHeader,
  NavBarPageLogo,
  NavBarItemsContainer,
  NavBarToggleButton,
  NavBarAbsoluteContainer,
  NavBarFakeContainer,
} from './NavBar.style'

const NavBar = React.forwardRef<HTMLUListElement, NavBarProps>(
  (baseProps, ref) => {
    const theme = useTheme()
    const [isHoveringIcon, setHoveringIcon] = React.useState<boolean>(false)

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
        <NavBarAbsoluteContainer>
          <NavBarContainer
            data-testid="nav-bar-container"
            {...rest}
            ref={ref}
            data-expanded={isExpanded}
            data-hover-icon={isHoveringIcon || isExpanded}
            color={color}
            backgroundColor={backgroundColor}
          >
            <GeometricalShapes isExpanded={isExpanded} />
            <NavBarHeader>
              {isExpanded && (
                <React.Fragment>
                  {typeof title === 'string' ? (
                    <NavBarPageLogo color={color} type="caption">
                      {title}
                    </NavBarPageLogo>
                  ) : (
                    title
                  )}
                </React.Fragment>
              )}
              <NavBarToggleButton onClick={handleToggle}>
                <Icon
                  onMouseEnter={() => setHoveringIcon(true)}
                  onMouseLeave={() => setHoveringIcon(false)}
                  icon={
                    isExpanded
                      ? 'burger-menu-light-minimize'
                      : 'burger-menu-light'
                  }
                />
              </NavBarToggleButton>
            </NavBarHeader>
            <NavBarItemsContainer>{children}</NavBarItemsContainer>
          </NavBarContainer>
        </NavBarAbsoluteContainer>
        <NavBarFakeContainer data-expanded={isExpanded} />
      </NavBarContext.Provider>
    )
  }
)

export default NavBar

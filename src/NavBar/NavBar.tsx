import * as React from 'react'

import Button from '../Button'
import FontIcon from '../Icon'
import palette from '../palette'
import useTheme from '../useTheme'

import NavBarContext from './NavBar.context'
import NavBarProps from './NavBar.interface'
import {
  NavBarContainer,
  NavBarSideContainer,
  NavBarItemsContainer,
  NavBarTitle,
  NavBarPaddingTop,
  NavBarTopBar,
  NavBarTopBarTitle,
  NavBarClose,
  NavBarTopBarSquare,
} from './NavBar.style'

const NavBar = React.forwardRef<HTMLUListElement, NavBarProps>(
  (baseProps, ref) => {
    const theme = useTheme()

    const props = { ...baseProps, theme }

    const {
      children,
      title,
      backgroundColor: rawBackgroundColor,
      ...rest
    } = props

    const [isOpenedOnMobile, setOpenedOnMobile] = React.useState(false)

    const handleMobileToggle = React.useCallback(
      () => setOpenedOnMobile(prev => !prev),
      []
    )

    const backgroundColor = props.backgroundColor || palette.blue[500]
    const activeBackgroundColor =
      props.activeBackgroundColor || palette.blue[800]

    const context = React.useMemo(
      () => ({ activeBackgroundColor, isInsideANavBar: true }),
      [activeBackgroundColor]
    )

    return (
      <NavBarContext.Provider value={context}>
        <NavBarContainer data-testid="nav-bar-container" {...rest} ref={ref}>
          <NavBarPaddingTop />

          <NavBarTopBar>
            <NavBarTopBarSquare>
              <Button onClick={handleMobileToggle}>
                <FontIcon icon="menu" onClick={handleMobileToggle} />
              </Button>
            </NavBarTopBarSquare>

            {title && <NavBarTopBarTitle>{title}</NavBarTopBarTitle>}

            <NavBarTopBarSquare />
          </NavBarTopBar>

          <NavBarSideContainer
            backgroundcolor={backgroundColor}
            data-mobile-open={isOpenedOnMobile}
          >
            <NavBarClose>
              <FontIcon icon="arrow_back" onClick={handleMobileToggle} />
            </NavBarClose>
            {title && <NavBarTitle>{title}</NavBarTitle>}
            <NavBarItemsContainer>{children}</NavBarItemsContainer>
          </NavBarSideContainer>
        </NavBarContainer>
      </NavBarContext.Provider>
    )
  }
)

export default NavBar

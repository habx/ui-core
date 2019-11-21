import * as React from 'react'

import Icon from '../Icon'
import palette from '../palette'
import useTheme from '../useTheme'

import GeometricalShapes from './GeometricalShapes'
import NavBarContext from './NavBar.context'
import NavBarProps, {
  ActionType,
  NavBarAction,
  NavBarState,
} from './NavBar.interface'
import {
  NavBarAbsoluteContainer,
  NavBarContainer,
  NavBarFakeContainer,
  NavBarHeader,
  NavBarItemsContainer,
  NavBarPageLogo,
  NavBarToggleButton,
} from './NavBar.style'

const HOVER_AUTO_OPENING_DELAY = 750
const HOVER_AUTO_CLOSE_DELAY = 150

const reducer: React.Reducer<NavBarState, NavBarAction> = (state, action) => {
  switch (action.type) {
    case ActionType.SetOpen: {
      return { ...state, isPersistent: action.isPersistent, isOpened: true }
    }

    case ActionType.SetClose: {
      return { ...state, isOpened: false }
    }

    case ActionType.ToggleOpen: {
      return {
        ...state,
        isPersistent: action.isPersistent,
        isOpened: !state.isOpened,
      }
    }

    case ActionType.SetHover: {
      return { ...state, isHovering: action.value }
    }

    case ActionType.SetHoverTitleIcon: {
      return { ...state, isHoveringTitleIcon: action.value }
    }

    default: {
      return state
    }
  }
}

const INITIAL_STATE: NavBarState = {
  isHovering: false,
  isHoveringTitleIcon: false,
  isOpened: false,
  isPersistent: false,
}

const NavBar = React.forwardRef<HTMLUListElement, NavBarProps>(
  (baseProps, ref) => {
    const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)
    const theme = useTheme()
    const clickRef = React.useRef<boolean>(false)

    const props = { ...baseProps, theme }

    const {
      children,
      title,
      color = palette.darkBlue[900],
      backgroundColor = palette.yellow[600],
      ...rest
    } = props

    const context = React.useMemo(
      () => ({ isInsideANavBar: true, isExpanded: state.isOpened, color }),
      [color, state.isOpened]
    )

    React.useEffect(() => {
      if (state.isHovering) {
        clickRef.current = false
        const t = setTimeout(() => {
          if (!clickRef.current) {
            dispatch({ type: ActionType.SetOpen, isPersistent: false })
          }
        }, HOVER_AUTO_OPENING_DELAY)

        return () => {
          clearTimeout(t)
        }
      } else if (!state.isPersistent) {
        setTimeout(() => {
          dispatch({ type: ActionType.SetClose })
        }, HOVER_AUTO_CLOSE_DELAY)
      }
    }, [state.isHovering, state.isPersistent])

    return (
      <NavBarContext.Provider value={context}>
        <NavBarAbsoluteContainer
          onMouseEnter={() =>
            dispatch({ type: ActionType.SetHover, value: true })
          }
          onMouseLeave={() =>
            dispatch({ type: ActionType.SetHover, value: false })
          }
          onClick={() => (clickRef.current = true)}
        >
          <NavBarContainer
            data-testid="nav-bar-container"
            {...rest}
            ref={ref}
            data-expanded={state.isOpened}
            data-hover-icon={state.isHoveringTitleIcon || state.isOpened}
            color={color}
            backgroundColor={backgroundColor}
          >
            <GeometricalShapes isExpanded={state.isOpened} />
            <NavBarHeader>
              {state.isOpened && (
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
              <NavBarToggleButton
                onClick={() =>
                  dispatch({ type: ActionType.ToggleOpen, isPersistent: true })
                }
              >
                <Icon
                  onMouseEnter={() =>
                    dispatch({
                      type: ActionType.SetHoverTitleIcon,
                      value: true,
                    })
                  }
                  onMouseLeave={() =>
                    dispatch({
                      type: ActionType.SetHoverTitleIcon,
                      value: false,
                    })
                  }
                  icon={
                    state.isOpened
                      ? 'burger-menu-light-minimize'
                      : 'burger-menu-light'
                  }
                />
              </NavBarToggleButton>
            </NavBarHeader>
            <NavBarItemsContainer>{children}</NavBarItemsContainer>
          </NavBarContainer>
        </NavBarAbsoluteContainer>
        <NavBarFakeContainer data-expanded={state.isOpened} />
      </NavBarContext.Provider>
    )
  }
)

export default NavBar

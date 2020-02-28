import * as React from 'react'

import Triangle from '../_internal/Triangle'
import Icon from '../Icon'
import palette from '../palette'
import useTheme from '../useTheme'

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
  TitleContainer,
  GeometricalShapesContainer,
} from './NavBar.style'

const HOVER_AUTO_OPENING_DELAY = 750
const HOVER_AUTO_CLOSE_DELAY = 500

const reducer: React.Reducer<NavBarState, NavBarAction> = (state, action) => {
  switch (action.type) {
    case ActionType.SetExpanded: {
      return { ...state, isPersistent: action.isPersistent, isExpanded: true }
    }

    case ActionType.SetClosed: {
      return { ...state, isExpanded: false }
    }

    case ActionType.ToggleOpen: {
      return {
        ...state,
        isPersistent: action.isPersistent,
        isExpanded: !state.isExpanded,
      }
    }

    case ActionType.SetHover: {
      return { ...state, isHovering: action.value }
    }

    case ActionType.SetHoverTitleIcon: {
      return { ...state, isHoveringTitleIcon: action.value }
    }

    case ActionType.SetPersistent: {
      return { ...state, isPersistent: action.value }
    }

    default: {
      return state
    }
  }
}

const INITIAL_STATE: NavBarState = {
  isHovering: false,
  isHoveringTitleIcon: false,
  isExpanded: false,
  isPersistent: false,
}

const NavBar = React.forwardRef<HTMLUListElement, NavBarProps>(
  (baseProps, ref) => {
    const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)
    const theme = useTheme()
    const clickRef = React.useRef<boolean>(false)
    const stateRef = React.useRef<NavBarState>(state)
    stateRef.current = state

    const props = { ...baseProps, theme }

    const {
      children,
      title,
      color = palette.darkBlue[900],
      backgroundColor = palette.yellow[600],
      ...rest
    } = props

    const context = React.useMemo(
      () => ({
        isInsideANavBar: true,
        isExpanded: state.isExpanded,
        isPersistent: state.isPersistent,
        setPersistent: (value: boolean) =>
          dispatch({ type: ActionType.SetPersistent, value }),
        color,
      }),
      [color, state.isExpanded, state.isPersistent]
    )

    React.useEffect(() => {
      if (state.isHovering) {
        clickRef.current = false
        const t = setTimeout(() => {
          if (!clickRef.current && !stateRef.current.isPersistent) {
            dispatch({ type: ActionType.SetExpanded, isPersistent: false })
          }
        }, HOVER_AUTO_OPENING_DELAY)

        return () => {
          clearTimeout(t)
        }
      } else {
        setTimeout(() => {
          if (!stateRef.current.isPersistent) {
            dispatch({ type: ActionType.SetClosed })
          }
        }, HOVER_AUTO_CLOSE_DELAY)
      }
    }, [state.isHovering])

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
            data-expanded={state.isExpanded}
            data-hover-icon={state.isHoveringTitleIcon || state.isExpanded}
            color={color}
            backgroundColor={backgroundColor}
          >
            <GeometricalShapesContainer data-expanded={state.isExpanded}>
              <Triangle
                height={120}
                width={120}
                origin={{ bottom: 0, left: 0 }}
                color="rgba(255, 255, 255, 0.2)"
              />
              <Triangle
                height={220}
                width={250}
                origin={{ bottom: 0, right: 0 }}
                color="rgba(255, 255, 255, 0.2)"
              />
            </GeometricalShapesContainer>{' '}
            <NavBarHeader>
              {state.isExpanded && (
                <TitleContainer>
                  {typeof title === 'string' ? (
                    <NavBarPageLogo color={color} type="caption">
                      {title}
                    </NavBarPageLogo>
                  ) : (
                    title
                  )}
                </TitleContainer>
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
                    state.isExpanded
                      ? 'burger-menu-light-minimize'
                      : 'burger-menu-light'
                  }
                />
              </NavBarToggleButton>
            </NavBarHeader>
            <NavBarItemsContainer>{children}</NavBarItemsContainer>
          </NavBarContainer>
        </NavBarAbsoluteContainer>
        <NavBarFakeContainer data-expanded={state.isExpanded} />
      </NavBarContext.Provider>
    )
  }
)

export default NavBar

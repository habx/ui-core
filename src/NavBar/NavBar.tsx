import * as React from 'react'

import { isString } from '../_internal/data'
import { Icon } from '../Icon'
import { Text } from '../Text'

import { NavBarContext } from './NavBar.context'
import {
  NavBarProps,
  ActionType,
  NavBarAction,
  NavBarState,
  NavBarContextValue,
} from './NavBar.interface'
import {
  NavBarAbsoluteContainer,
  NavBarContainer,
  NavBarFakeContainer,
  NavBarHeader,
  NavBarItemsContainer,
  NavBarToggleButton,
  TitleContainer,
  RoundIconButton,
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

export const NavBar = React.forwardRef<HTMLUListElement, NavBarProps>(
  (props, ref) => {
    const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)
    const clickRef = React.useRef<boolean>(false)
    const stateRef = React.useRef<NavBarState>(state)
    stateRef.current = state

    const {
      children,
      title,
      subtitle,
      backgroundColor,
      useBreadcrumb,
      ...rest
    } = props

    const context = React.useMemo<NavBarContextValue>(
      () => ({
        isInsideANavBar: true,
        isExpanded: state.isExpanded,
        isPersistent: state.isPersistent,
        setPersistent: (value: boolean) =>
          dispatch({ type: ActionType.SetPersistent, value }),
      }),
      [state.isExpanded, state.isPersistent]
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
          backgroundColor={backgroundColor}
          simulated
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
            backgroundColor={backgroundColor}
            data-useBreadcrumb={useBreadcrumb}
          >
            <NavBarHeader data-useBreadcrumb={useBreadcrumb}>
              {state.isExpanded && (
                <TitleContainer>
                  {isString(title) ? (
                    <Text variation="title">{title}</Text>
                  ) : (
                    title
                  )}
                  {subtitle && (
                    <React.Fragment>
                      &nbsp;&nbsp;
                      <Text type="caption">{subtitle}</Text>
                    </React.Fragment>
                  )}
                </TitleContainer>
              )}
              <NavBarToggleButton
                onClick={() =>
                  dispatch({ type: ActionType.ToggleOpen, isPersistent: true })
                }
              >
                {useBreadcrumb ? (
                  <RoundIconButton
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
                    data-expanded={state.isExpanded}
                    large
                  />
                ) : (
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
                )}
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

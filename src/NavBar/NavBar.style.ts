import styled from 'styled-components'

import {
  ANIMATION_DURATIONS,
  ANIMATION_TIMING_FUNCTION,
} from '../animations/animations'
import palette from '../palette'
import theme from '../theme'

export const NavBarContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex: 0 0 auto;
  height: 100vh;
  width: 48px;
  position: relative;
`

export const NavBarContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: width ${ANIMATION_DURATIONS.m}ms ${ANIMATION_TIMING_FUNCTION};
  font-family: ${theme.font()};

  background-color: ${palette.yellow[600]};
  color: ${palette.darkBlue[900]};

  &[data-expanded='true'] {
    width: 250px;
  }
`

export const NavBarItemsContainer = styled.div`
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
`

export const NavBarHeader = styled.div`
  font-size: 20px;
  padding: 0 14px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavBarToggleButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
`

export const NavBarPageLogo = styled.div``

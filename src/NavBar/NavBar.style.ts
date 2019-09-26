import styled from 'styled-components'

import {
  ANIMATION_DURATIONS,
  ANIMATION_TIMING_FUNCTION,
} from '../animations/animations'
import Text from '../Text'
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

export const NavBarToggleButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 20px;
`

export const NavBarContent = styled.div<{
  color?: string
  backgroundColor?: string
}>`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: width ${ANIMATION_DURATIONS.m}ms ${ANIMATION_TIMING_FUNCTION};
  font-family: ${theme.font()};

  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};

  &[data-expanded='true'] {
    width: 250px;
  }

  & ${NavBarToggleButton} {
    color: ${({ color }) => color};
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

export const NavBarPageLogo = styled(Text)`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: ${theme.color('secondary', { opacity: 0.4 })};
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
`

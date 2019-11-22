import styled from 'styled-components'

import {
  ANIMATION_DURATIONS,
  ANIMATION_TIMING_FUNCTION,
} from '../animations/animations'
import Text from '../Text'
import theme from '../theme'

const EXPANDED_SIZE = 250
const DEFAULT_SIZE = 64

export const NavBarToggleButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 24px;
  margin: auto;
`

export const NavBarAbsoluteContainer = styled.div`
  position: absolute;
  height: 100%;
`

export const NavBarFakeContainer = styled.div`
  height: 100%;
  transition: width ${ANIMATION_DURATIONS.m}ms ${ANIMATION_TIMING_FUNCTION};
  width: ${DEFAULT_SIZE}px;
  flex: 0 0 auto;

  &[data-expanded='true'] {
    width: ${EXPANDED_SIZE}px;
  }
`

export const NavBarContainer = styled.ul<{
  color?: string
  backgroundColor?: string
}>`
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex: 0 0 auto;
  height: 100%;
  width: ${DEFAULT_SIZE}px;
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  transition: width ${ANIMATION_DURATIONS.m}ms ${ANIMATION_TIMING_FUNCTION};
  font-family: ${theme.font()};

  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};

  &[data-hover-icon='true'] {
    width: ${DEFAULT_SIZE + 6}px;
  }

  &[data-expanded='true'] {
    width: ${EXPANDED_SIZE}px;
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

  > * {
    align-self: stretch;
  }
`

export const NavBarHeader = styled.div`
  font-size: 20px;
  padding: 0 14px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & img {
    height: ${DEFAULT_SIZE}px;
    width: ${DEFAULT_SIZE}px;
  }
`

export const NavBarPageLogo = styled(Text)`
  height: ${DEFAULT_SIZE}px;
  width: ${DEFAULT_SIZE}px;
  border-radius: 50%;
  background-color: ${theme.color('secondary', { opacity: 0.4 })};
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
`

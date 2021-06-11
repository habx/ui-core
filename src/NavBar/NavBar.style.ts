import styled from 'styled-components'

import { transition } from '../animations'
import { Background } from '../Background'
import { palette } from '../palette'
import { theme } from '../theme'

const EXPANDED_SIZE = 332
const DEFAULT_SIZE = 60

export const NavBarToggleButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 24px;
  margin-left: auto;
  margin-right: auto;
  color: ${theme.textColor()};
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
`

export const NavBarAbsoluteContainer = styled(Background)`
  position: absolute;
  height: 100%;
`

export const NavBarFakeContainer = styled.div`
  height: 100%;
  transition: ${transition('width')};
  width: ${DEFAULT_SIZE}px;
  flex: 0 0 auto;

  &[data-expanded='true'] {
    width: ${EXPANDED_SIZE}px;
  }
`

export const NavBarContainer = styled.ul<{ backgroundColor: string }>`
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
  transition: ${transition('width')};
  font-family: ${theme.font()};
  background: ${palette.purpleDawn[900]};

  &[data-hover-icon='true'] {
    width: ${DEFAULT_SIZE + 6}px;
  }

  &[data-expanded='true'] {
    width: ${EXPANDED_SIZE}px;
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

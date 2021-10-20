import styled from 'styled-components'

import { transition } from '../animations'
import { Background } from '../Background'
import { RoundIconButton as BaseRoundIcon } from '../RoundIconButton'
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
  padding: 18px 6px;
  flex: 0 0 auto;
  height: 100%;
  width: ${DEFAULT_SIZE}px;
  position: relative;
  z-index: 100;
  display: flex;
  row-gap: 24px;
  flex-direction: column;
  transition: ${transition('width')};
  font-family: ${theme.font()};
  background: ${(props) => props.backgroundColor};

  &[data-collapsable='true']&:not([data-expanded='true']) {
    background: unset;
  }

  &[data-hover-icon='true'] {
    width: ${DEFAULT_SIZE + 6}px;
  }

  &[data-expanded='true'] {
    width: ${EXPANDED_SIZE}px;
    padding: 18px 12px;
  }
`

export const NavBarItemsContainer = styled.div`
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
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  &[data-collapsable='true'] {
    flex-direction: row-reverse;
    & > :last-child {
      margin-right: 12px;
    }
  }

  & img {
    height: ${DEFAULT_SIZE}px;
    width: ${DEFAULT_SIZE}px;
    object-fit: contain;
  }
`

export const RoundIconButton = styled(BaseRoundIcon)`
  position: absolute;
  top: 24px;
  left: 36px;
  box-shadow: ${theme.shadow('regular')};
  background-color: ${theme.color('background', { useRootTheme: true })};
  color: ${theme.neutralColor(900)};

  &[data-expanded='true'] {
    position: unset;
  }
`

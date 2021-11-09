import styled from 'styled-components'

import { zIndex } from '../_internal/theme/zIndex'
import { transition } from '../animations'
import { Background } from '../Background'
import { Icon } from '../Icon'
import { RoundIconButton as BaseRoundIcon } from '../RoundIconButton'
import { theme } from '../theme'

const EXPANDED_SIZE = 332
const DEFAULT_SIZE = 60

export const NavBarFloatingContainer = styled(Background).attrs({
  simulated: true,
})`
  position: absolute;
  top: 24px;
  left: 96px;
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
`

export const NavBarToggle = styled(Icon)`
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  color: ${theme.textColor()};
  cursor: pointer;
`

export const RoundIconButton = styled(BaseRoundIcon)`
  box-shadow: ${theme.shadow('regular')};
  background-color: ${theme.color('background')};
  color: ${theme.neutralColor(700)};
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

  & img {
    height: ${DEFAULT_SIZE}px;
    width: ${DEFAULT_SIZE}px;
    object-fit: contain;
  }
`

export const NavBarContainer = styled.ul<{ backgroundColor: string }>`
  list-style-type: none;
  margin: 0;
  padding: 24px 6px;
  flex: 0 0 auto;
  height: 100%;
  position: relative;
  display: flex;
  row-gap: 24px;
  flex-direction: column;
  transition: ${transition('width')};
  font-family: ${theme.font()};
  background: ${(props) => props.backgroundColor};
`

export const NavBarAbsoluteContainer = styled(Background)`
  position: absolute;
  width: ${DEFAULT_SIZE}px;
  height: 100%;
  z-index: ${zIndex.modals};

  transition: ${transition('transform', { duration: 'l' })};
  transform: translateX(0);

  &[data-hover-icon='true'] {
    width: ${DEFAULT_SIZE + 6}px;
  }

  &[data-collapsible='true'] {
    &[data-expanded='false'] {
      transform: translateX(-100%);
    }

    ${TitleContainer} {
      margin-left: 60px;
    }
  }

  &[data-expanded='true'] {
    ${NavBarContainer} {
      width: ${EXPANDED_SIZE}px;
      padding-left: 12px;
      padding-right: 12px;
    }

    ${NavBarFloatingContainer} {
      left: 12px;
    }
  }
`

export const NavBarFakeContainer = styled.div`
  height: 100%;
  transition: ${transition('width', { duration: 'l' })};
  width: ${DEFAULT_SIZE}px;
  flex: 0 0 auto;

  [data-expanded='true'] ~ & {
    width: ${EXPANDED_SIZE}px;
  }

  [data-collapsible='true'][data-expanded='false'] ~ & {
    width: 0;
  }
`

import styled from 'styled-components'

import { transition } from '../animations'
import { Text } from '../Text'
import { theme } from '../theme'

export const IconContainer = styled.div`
  height: 32px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: ${theme.textColor({ variation: 'title' })};
`

export const NavBarItemContainer = styled.li`
  position: relative;
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  outline: none;
  display: flex;
  align-items: center;
  transition: ${transition('background-color')};
  cursor: pointer;
  white-space: nowrap;
  user-select: none;

  margin-right: 6px;
  margin-left: 6px;
  border-radius: 4px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.07);
  }

  &[data-bottom='true'] {
    margin-top: auto;
  }

  &[data-bottom='true'] + [data-bottom='true'] {
    margin-top: initial;
  }

  &[data-disabled='true'] {
    pointer-events: none;
    opacity: 0.4;
  }

  &[data-expanded='true'] {
    margin-right: 12px;
    margin-left: 12px;

    &[data-active='true'],
    &.active {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`

export const TextContainer = styled.div`
  overflow: hidden;
`

export const TitleContainer = styled(Text)`
  margin-left: 18px;
  flex: 1 1 100%;
`

export const DescriptionContainer = styled(Text)`
  margin-left: 18px;
  flex: 1 1 100%;
`

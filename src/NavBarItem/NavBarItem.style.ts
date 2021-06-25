import styled from 'styled-components'

import { transition } from '../animations'
import { theme } from '../theme'

export const IconContainer = styled.div`
  height: 36px;
  width: 36px;
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
  column-gap: 12px;
  transition: ${transition('background-color')};
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  border-radius: 4px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.07);
  }

  &[data-bottom='true'] {
    margin-top: auto;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: 0;
      right: 0;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
  }

  [data-bottom='true'] ~ &[data-bottom='true'] {
    margin-top: unset;

    &::before {
      content: unset;
    }
  }

  &[data-disabled='true'] {
    pointer-events: none;
    opacity: 0.4;
  }

  &[data-expanded='true'] {
    &[data-active='true'],
    &.active {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`

export const TextContainer = styled.div`
  flex: 1;
  overflow: hidden;
  > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

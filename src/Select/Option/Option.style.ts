import styled from 'styled-components'

import { transition } from '../../animations/animations'
import { fontScale } from '../../fontScale'
import { theme } from '../../theme'

export const OptionContent = styled.div``

export const SideElementContainer = styled.div`
  position: relative;
  font-size: 20px;

  & > *[data-hover='true'] {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  & > * {
    transition: ${transition('all')};
  }
`

export const OptionContainer = styled.li`
  transition: ${transition('all')};
  outline: none;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${theme.font()};
  height: 48px;
  padding: 0 18px;
  font-size: ${fontScale.moon.size}px;
  color: ${theme.textColor()};

  &:hover,
  &:focus {
    background-color: ${theme.neutralColor(200)};
    color: ${theme.textColor({ variation: 'title' })};
  }

  &:not(:hover)[data-selected='true'] {
    color: ${theme.color('primary')};
  }

  &[data-disabled='true'] {
    opacity: 0.5;
    user-focus: none;
    pointer-events: none;
  }

  &:hover {
    & > ${SideElementContainer} {
      & > *:not([data-hover='true']) {
        opacity: 0;
      }

      & > *[data-hover='true'] {
        opacity: 1;
      }
    }
  }
`

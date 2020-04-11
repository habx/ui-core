import styled from 'styled-components'

import fontScale from '../../fontScale/fontScale'
import palette from '../../palette'
import theme from '../../theme'

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
    transition: all ease-in 150ms;
  }
`

export const OptionContainer = styled.li`
  transition: all ease-in 150ms;
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
  color: ${theme.color('secondary', { opacity: 0.72 })};

  &:hover,
  &:focus {
    background-color: ${palette.darkBlue[200]};
    color: ${theme.color('secondary', { opacity: 1 })};
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

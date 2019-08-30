import styled from 'styled-components'

import palette from '../../palette'
import theme from '../../theme'

export const OptionContainer = styled.li`
  transition: background-color ease-in 150ms;
  outline: none;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  display: flex;
  align-items: center;
  height: 48px;
  font-family: ${theme.font()};
  padding: 0 12px;
  font-size: ${theme.font('text')};
  color: ${theme.color('secondary', { opacity: 0.72 })};

  i {
    vertical-align: middle;
    margin-right: 4px;
  }

  &:hover,
  &:focus {
    background-color: ${palette.darkBlue[200]};
    color: ${theme.color('secondary', { opacity: 1 })};
  }

  &[data-selected='true'] {
    background-color: ${palette.darkBlue[200]};
  }

  &[data-disabled='true'] {
    opacity: 0.5;
    user-focus: none;
    &:hover,
    &:focus {
      background-color: transparent;
      cursor: auto;
    }
  }
`

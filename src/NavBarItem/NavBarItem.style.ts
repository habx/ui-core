import styled from 'styled-components'

import Text from '../Text'

export const IconContainer = styled.div`
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 18px;
`

export const NavBarItemContainer = styled.li`
  position: relative;
  font-size: 12px;
  font-weight: bold;
  padding: 8px 15px;
  outline: none;
  display: flex;
  overflow: hidden;
  transition: background-color 150ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  &[data-bottom='true'] {
    margin-top: auto;
  }

  &[data-bottom='true'] + [data-bottom='true'] {
    margin-top: initial;
  }

  &[data-active='true'] {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &[data-disabled='true'] {
    pointer-events: none;
    opacity: 0.4;
  }
`

export const TitleContainer = styled(Text).attrs(() => ({ opacity: 1 }))`
  margin-left: 18px;
  flex: 1 1 100%;
  white-space: nowrap;
`

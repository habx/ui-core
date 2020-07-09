import styled from 'styled-components'

import palette from '../palette'
import theme from '../theme'
export const TabsBarItemContainer = styled.li`
  --tabs-bar-item-color: ${theme.color('secondary', { opacity: 0.72 })};
  --tabs-bar-item-active-color: ${theme.color('primary')};

  font-family: ${theme.font()};
  font-weight: 400;
  color: var(--tabs-bar-item-color);

  list-style-type: none;
  user-select: none;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: opacity 50ms ease-in-out;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 2px;
    background-color: var(--tabs-bar-item-active-color);
    opacity: 0;
  }

  &[data-active='true'] {
    color: var(--tabs-bar-item-active-color);

    &::after {
      opacity: 1;
    }
  }

  &[data-disabled='true'] {
    --tabs-bar-item-color: ${palette.darkBlue[400]};
    --tabs-bar-item-active-color: ${palette.darkBlue[400]};
    pointer-events: none;
  }
`

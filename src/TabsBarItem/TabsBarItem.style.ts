import styled from 'styled-components'

import { transition } from '../animations/animations'
import { theme } from '../theme'

export const TabsBarItemContainer = styled.li`
  --tabs-bar-item-color: ${theme.textColor()};
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
  transition: ${transition('opacity', { duration: 's' })};

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
    --tabs-bar-item-color: ${theme.neutralColor(400)};
    --tabs-bar-item-active-color: ${theme.neutralColor(400)};
    pointer-events: none;
  }
`

export const SideElementContainer = styled.div`
  font-size: 0.9em;
  display: flex;
  margin-top: 1px;

  &[data-position='left'] {
    margin-right: 6px;
  }

  &[data-position='right'] {
    margin-left: 6px;
  }
`

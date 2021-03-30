import styled from 'styled-components'

import { theme } from '../theme'

export const CardItemContainer = styled.button`
  background: none;
  border: none;
  outline: none;

  font-family: ${theme.font()};
  font-size: 16px;

  flex: 1 1 auto;
  display: flex;
  align-items: center;

  padding: 0 var(--layout-right-padding) 0 var(--layout-left-padding);
  margin: 0 calc(-1 * var(--layout-right-padding)) 0
    calc(-1 * var(--layout-left-padding));
  white-space: nowrap;
  overflow: hidden;

  height: 60px;
  width: calc(100% + var(--layout-right-padding) + var(--layout-left-padding));

  transition: background-color 50ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${theme.neutralColor(200)};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${theme.neutralColor(300)};
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.7;
  }
`

export const CardItemContent = styled.div`
  flex: 1 1 100%;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 12px;
  display: flex;
  align-items: baseline;

  & > *:not(:first-child) {
    margin-left: 8px;
  }

  > *:first-child {
    flex: 0 0 auto;
  }

  > *:last-child {
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const ChevronIconContainer = styled.div`
  flex: 0 0 auto;
  font-size: 24px;
`

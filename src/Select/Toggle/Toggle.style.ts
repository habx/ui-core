import styled from 'styled-components'

export const ToggleContainer = styled.div`
  position: relative;
  height: 16px;
  width: 16px;
  border-radius: 2px;
  border: 2px solid #003a6c;
  margin-right: 12px;
  box-sizing: border-box;

  &:not([data-disabled='true']) {
    cursor: pointer;
  }
`

export const ToggleContent = styled.div`
  background-color: #003a6c;

  width: 0;
  height: 0;
  margin: 50%;

  transition: all 150ms ease-in-out;

  &:not([data-state='empty']) {
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    margin: 2px;
  }
`

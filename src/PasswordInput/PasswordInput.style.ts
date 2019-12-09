import styled from 'styled-components'

import theme from '../theme'

export const HiddenInputContainer = styled.div`
  position: relative;
  display: inline-flex;
  flex: 1;
  width: 100%;
`

export const HideButton = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
  display: inline-block;
  font: normal normal normal 16px/1 'habx-icon';
  font-size: inherit;
  text-rendering: auto;
  text-transform: none;
  line-height: inherit;
  vertical-align: bottom;
  height: 24px;
  color: ${theme.textColor('disabledPlaceholder')};

  &[data-active='true'] {
    color: ${theme.color('primary')};
  }

  &:hover {
    opacity: 1;
    transition: opacity ease-in 200ms;
  }

  &:before {
    content: '👁';
    font-size: 24px;
    vertical-align: -20%;
  }
`

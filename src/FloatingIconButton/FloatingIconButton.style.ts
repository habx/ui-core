import styled from 'styled-components'

import zIndex from '../_internal/zIndex'
import breakpoints from '../breakpoints'
import palette from '../palette'
import theme from '../theme'

export const FloatingButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  user-select: none;
  vertical-align: middle;
  text-align: left;
  text-decoration: none;
  box-shadow: ${theme.shadow('lower')};

  height: 48px;
  width: 48px;
  border-radius: 24px;
  font-size: 24px;

  position: absolute;
  bottom: 24px;
  z-index: ${zIndex.floatingButtons};

  @media (${breakpoints.below.phone}) {
    bottom: 12px;
  }

  transition-property: border, padding, background-color;
  transition-duration: 50ms;
  transition-timing-function: ease-in-out;

  &[data-fixed='true'] {
    position: fixed;
  }

  &[data-position='bottom-right'] {
    right: 36px;

    @media (${breakpoints.below.phone}) {
      right: 18px;
    }
  }

  &[data-position='bottom-left'] {
    left: 36px;

    @media (${breakpoints.below.phone}) {
      left: 18px;
    }
  }

  border: 1px solid transparent;
  background-color: ${theme.color('primary', { dynamic: true })};
  color: ${theme.color('primary', {
    dynamic: true,
    variation: 'contrastText',
  })};

  &:hover {
    background-color: ${theme.color('primary', {
      dynamic: true,
      variation: 'hover',
    })};
    box-shadow: ${theme.shadow('lower', { hover: true })};
  }

  &:focus,
  &:active {
    border-color: ${theme.color('primary', {
      dynamic: true,
      variation: 'focus',
    })};
  }

  &:active {
    box-shadow: ${theme.shadow('lower')};
  }

  &:disabled {
    pointer-events: none;
    background-color: ${palette.darkBlue[400]};
  }
`

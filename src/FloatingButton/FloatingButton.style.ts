import styled from 'styled-components'

import zIndex from '../_internal/zIndex'
import breakpoints from '../breakpoints'
import fontScale from '../fontScale'
import palette from '../palette'
import theme from '../theme'

export const SideElementContainer = styled.div`
  font-size: 24px;
  display: flex;
  margin-top: -1px;

  &[data-position='left'] {
    margin-right: 8px;
  }

  &[data-position='right'] {
    margin-left: 8px;
  }
`

export const FloatingButtonContent = styled.div`
  position: relative;
  white-space: nowrap;
`

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
  box-shadow: ${theme.shadow('low')};

  padding: 0 24px;
  height: 48px;
  border-radius: 24px;
  max-width: 100%;
  font-size: ${fontScale.mars.size}px;
  font-family: ${theme.font()};
  text-transform: uppercase;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${zIndex.floatingButtons};

  transition-property: border, padding, background-color;
  transition-duration: 50ms;
  transition-timing-function: ease-in-out;

  &[data-fixed='true'] {
    position: fixed;
  }

  &[data-position='bottom'] {
    bottom: 24px;

    @media (${breakpoints.below.phone}) {
      bottom: 12px;
    }
  }

  &[data-position='top'] {
    top: 24px;

    @media (${breakpoints.below.phone}) {
      top: 12px;
    }
  }

  &[data-small='true'] {
    padding: 0 12px;
    height: 28px;
    border-radius: 14px;

    & ${SideElementContainer} {
      font-size: 12px;
    }
  }

  border: 1px solid transparent;
  background-color: ${theme.color('primary', { dynamic: true })};
  color: ${theme.color('primary', {
    variation: 'contrastText',
    dynamic: true,
  })};

  & svg {
    fill: ${theme.color('primary', {
      variation: 'contrastText',
      dynamic: true,
    })};
  }

  &:hover {
    background-color: ${theme.color('primary', {
      dynamic: true,
      variation: 'hover',
    })};
    box-shadow: ${theme.shadow('low', { hover: true })};
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

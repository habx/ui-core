import styled, { css } from 'styled-components'

import breakpoints from '../breakpoints'
import palette from '../palette'
import theme from '../theme'

const SIZES = {
  s: { diameter: 24, fontSize: 12 },
  m: { diameter: 36, fontSize: 16 },
  l: { diameter: 50, fontSize: 20 },
}

const size = (sizeName: 's' | 'm' | 'l') => {
  const sizeConfig = SIZES[sizeName]

  return css`
    height: ${sizeConfig.diameter}px;
    width: ${sizeConfig.diameter}px;
    font-size: ${sizeConfig.fontSize}px;
  `
}

export const NavigationButtonContainer = styled.button`
  outline: none;
  user-select: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color('background')};
  border: none;
  border-radius: 50%;
  z-index: 1;
  opacity: 1;
  color: ${theme.color('primary', { dynamic: true })};
  box-shadow: ${theme.shadow('low')};
  transition: all 150ms ease-in-out;

  &[data-large='true'] {
    ${size('l')};

    @media (${breakpoints.below.tablet}) {
      ${size('m')};
    }

    @media (${breakpoints.below.phone}) {
      ${size('s')};
    }
  }

  &[data-small='true'] {
    ${size('s')};
  }

  &:not([data-large='true']):not([data-small='true']) {
    ${size('m')};

    @media (${breakpoints.below.phone}) {
      ${size('s')};
    }
  }

  &:not(:disabled) {
    cursor: pointer;

    &:hover {
      box-shadow: ${theme.shadow('low', { hover: true })};
    }

    &:active {
      box-shadow: ${theme.shadow('lower')};
    }
  }

  &:disabled {
    color: ${palette.darkBlue[400]};

    &[data-background='true'] {
      color: ${theme.color('secondary', { opacity: 0.3, useRootTheme: true })};
    }
  }
`

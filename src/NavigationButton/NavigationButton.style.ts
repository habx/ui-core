import styled, { css } from 'styled-components'

import breakpoints from '../breakpoints'
import palette from '../palette'
import theme from '../theme'

const SIZES = {
  s: { diameter: 24, fontSizes: { navigation: 12, toggle: 16 } },
  m: { diameter: 36, fontSizes: { navigation: 16, toggle: 24 } },
  l: { diameter: 50, fontSizes: { navigation: 20, toggle: 30 } },
}

const size = (sizeName: 's' | 'm' | 'l') => {
  const sizeConfig = SIZES[sizeName]

  return css`
    height: ${sizeConfig.diameter}px;
    width: ${sizeConfig.diameter}px;

    &[data-usage='navigation'] {
      font-size: ${sizeConfig.fontSizes.navigation}px;
    }

    &[data-usage='toggle'] {
      font-size: ${sizeConfig.fontSizes.toggle}px;
    }
  `
}

export const NavigationButtonContainer = styled.button`
  outline: none;
  user-select: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  z-index: 1;
  opacity: 1;
  box-shadow: ${theme.shadow('low')};
  transition: all 150ms ease-in-out;
  padding: 0;

  color: ${theme.color('primary', { dynamic: true })};
  background-color: ${theme.color('background')};

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
  }

  &[data-background='true'] {
    color: #fff;

    &:disabled {
      color: ${theme.color('secondary', { opacity: 0.3, useRootTheme: true })};
    }
  }
`

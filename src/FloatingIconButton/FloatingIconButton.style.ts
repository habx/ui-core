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
  text-decoration: none;
  border: none;

  --floating-icon-button-outer-shadow: ${theme.shadow('lower')};
  --floating-icon-button-radius: 24px;
  --floating-icon-button-border-width: 0;

  box-shadow: var(--floating-icon-button-outer-shadow),
    inset 0 0 0 var(--floating-icon-button-border-width)
      ${theme.color('primary', {
        dynamic: true,
        variation: 'focus',
      })};

  z-index: ${zIndex.floatingButtons};

  height: calc(var(--floating-icon-button-radius) * 2);
  width: calc(var(--floating-icon-button-radius) * 2);
  border-radius: var(--floating-icon-button-radius);
  font-size: var(--floating-icon-button-radius);

  position: absolute;

  transition-property: box-shadow, padding, background-color;
  transition-duration: 50ms;
  transition-timing-function: ease-in-out;

  &[data-fixed='true'] {
    position: fixed;
  }

  &[data-small='true'] {
    --floating-icon-button-radius: 18px;
  }

  &[data-position='bottom-right'] {
    right: 36px;
    bottom: 24px;

    @media (${breakpoints.below.phone}) {
      right: 20px;
    }
  }

  &[data-position='bottom-left'] {
    left: 36px;
    bottom: 24px;

    @media (${breakpoints.below.phone}) {
      left: 20px;
    }
  }

  &[data-position='top-right'] {
    right: 36px;
    top: 24px;

    @media (${breakpoints.below.phone}) {
      right: 20px;
    }
  }

  &[data-position='top-left'] {
    left: 36px;
    top: 24px;

    @media (${breakpoints.below.phone}) {
      left: 20px;
    }
  }

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
    --floating-icon-button-outer-shadow: ${theme.shadow('lower', {
      hover: true,
    })};
  }

  &:focus,
  &:active {
    --floating-icon-button-border-width: 1px;
  }

  &:active {
    --floating-icon-button-outer-shadow: ${theme.shadow('lower')};
  }

  &:disabled {
    pointer-events: none;
    background-color: ${palette.darkBlue[400]};
  }
`

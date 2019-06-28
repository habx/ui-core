import styled from 'styled-components'

import breakpoints from '../breakpoints'
import palette from '../palette'
import theme from '../theme'

export const IconContainer = styled.div`
  height: 13px;
  display: flex;

  &[data-position='left'] {
    margin-right: 8px;
  }

  &[data-position='right'] {
    margin-left: 8px;
  }

  & > svg {
    height: 100%;
  }
`

export const ButtonContent = styled.div`
  position: relative;
  white-space: nowrap;
`

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  user-select: none;
  vertical-align: middle;
  text-align: left;
  text-decoration: none;
  border-radius: 2px;
  font-weight: 500;

  padding: 0 24px;
  height: 48px;
  max-width: 100%;
  font-size: 16px;
  line-height: 20px;
  font-family: ${theme.get('textFont')}, sans-serif;

  transition-property: border, padding, background-color;
  transition-duration: 50ms;
  transition-timing-function: ease-in-out;

  &[data-small='true'] {
    padding: 0 16px;
    line-height: 18px;
    height: 34px;
    font-size: 14px;

    & ${IconContainer} {
      height: 11px;
    }
  }

  &[data-large='true'] {
    font-size: 18px;
    line-height: 27px;
    height: 64px;
    padding: 0 70px;
    max-width: calc(100vw - 48px);

    & ${IconContainer} {
      height: 15px;
    }
  }

  &[data-outline='true'] {
    background-color: transparent;
    color: ${theme.color('secondary', { dynamic: true })};
    border: 2px solid ${theme.color('secondary', { dynamic: true })};

    & svg {
      fill: ${theme.color('secondary', { dynamic: true })};
    }

    &:hover,
    &:active {
      border-width: 4px;
      padding: 0 22px;

      &[data-large='true'] {
        padding: 0 68px;
      }

      &[data-small='true'] {
        padding: 0 14px;
      }
    }

    &:focus {
      border-width: 6px;
      padding: 0 20px;

      &[data-large='true'] {
        padding: 0 66px;
      }

      &[data-small='true'] {
        padding: 0 12px;
      }
    }
  }

  &[data-outline='false'] {
    border: 4px solid transparent;
    background-color: ${theme.color('primary', { dynamic: true })};
    color: ${theme.get('white')};

    & svg {
      fill: ${theme.get('white')};
    }

    &:hover,
    &:active {
      background-color: ${theme.color('primary', {
        dynamic: true,
        variation: 'hover',
      })};
    }

    &:focus {
      border-color: ${theme.color('primary', {
        dynamic: true,
        variation: 'focus',
      })};
    }
  }

  &[data-full-width='true'] {
    width: 100%;
  }

  &:disabled {
    pointer-events: none;

    &[data-outline='false'] {
      background-color: ${palette.darkBlue[400]};
    }

    &[data-outline='true'] {
      color: ${palette.darkBlue[400]};
      border-color: ${palette.darkBlue[400]};
    }
  }

  @media (${breakpoints.below.phone}) {
    font-size: 16px;

    & svg {
      height: 12px;
    }
  }
`

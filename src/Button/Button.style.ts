import styled from 'styled-components'

import palette from '../palette'
import theme from '../theme'

export const IconContainer = styled.div`
  height: 13px;
  display: flex;
  margin-top: -2px;

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

  &[data-outline='true'],
  &[data-link='true'] {
    background-color: transparent;

    &:hover,
    &:active {
      padding: 0 22px;
      border-width: 4px;

      &[data-large='true'] {
        padding: 0 68px;
      }

      &[data-small='true'] {
        padding: 0 14px;
      }
    }

    &:focus {
      padding: 0 20px;
      border-width: 6px;

      &[data-large='true'] {
        padding: 0 66px;
      }

      &[data-small='true'] {
        padding: 0 12px;
      }
    }
  }

  &[data-outline='true'] {
    border: 2px solid ${theme.color('secondary', { dynamic: true })};
    color: ${theme.color('secondary', { dynamic: true })};

    & svg {
      fill: ${theme.color('secondary', { dynamic: true })};
    }
  }

  &[data-link='true'] {
    border: 2px solid transparent;
    color: ${theme.color('primary', { dynamic: true })};

    & svg {
      fill: ${theme.color('primary', { dynamic: true })};
    }

    &:hover,
    &:active {
      color: ${theme.color('primary', { dynamic: true, variation: 'hover' })};

      & svg {
        fill: ${theme.color('primary', { dynamic: true, variation: 'hover' })};
      }
    }

    &:focus {
      color: ${theme.color('primary', { dynamic: true, variation: 'focus' })};

      & svg {
        fill: ${theme.color('primary', { dynamic: true, variation: 'focus' })};
      }
    }
  }

  &[data-outline='false'][data-link='false'] {
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

    &[data-outline='false'][data-link='false'] {
      background-color: ${palette.darkBlue[400]};
    }

    &[data-outline='true'] {
      color: ${palette.darkBlue[400]};
      border-color: ${palette.darkBlue[400]};
    }

    &[data-link='true'] {
      color: ${palette.darkBlue[400]};
    }
  }
`

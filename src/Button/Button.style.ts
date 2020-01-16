import styled from 'styled-components'

import palette from '../palette'
import theme from '../theme'

export const SideElementContainer = styled.div`
  font-size: 0.9em;
  display: flex;
  margin-top: 1px;

  &[data-position='left'] {
    margin-right: 8px;
  }

  &[data-position='right'] {
    margin-left: 8px;
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
  font-family: ${theme.font()};

  transition-property: border, padding, background-color;
  transition-duration: 50ms;
  transition-timing-function: ease-in-out;

  &[data-small='true'] {
    padding: 0 16px;
    line-height: 18px;
    height: 34px;
    font-size: 14px;

    & ${SideElementContainer} {
      height: 11px;
    }
  }

  &[data-large='true'] {
    font-size: 18px;
    line-height: 27px;
    height: 64px;
    padding: 0 70px;
    max-width: calc(100vw - 48px);

    & ${SideElementContainer} {
      height: 15px;
    }
  }

  &[data-outline='true'] {
    background-color: transparent;
    border: 2px solid ${theme.color('secondary', { dynamic: true })};
    color: ${theme.color('secondary', { dynamic: true })};

    & svg {
      fill: ${theme.color('secondary', { dynamic: true })};
    }

    &:hover {
      padding: 0 22px;
      border-width: 4px;

      &[data-large='true'] {
        padding: 0 68px;
      }

      &[data-small='true'] {
        padding: 0 14px;
      }
    }

    &:focus,
    &:active {
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

  &[data-link='true'] {
    background-color: transparent;
    border: none;
    padding: 0;
    color: ${theme.color('primary', { dynamic: true })};
    height: 20px;

    & svg {
      fill: ${theme.color('primary', { dynamic: true })};
    }

    &:hover {
      color: ${theme.color('primary', { dynamic: true, variation: 'hover' })};

      & svg {
        fill: ${theme.color('primary', { dynamic: true, variation: 'hover' })};
      }
    }

    &:focus,
    &:active {
      color: ${theme.color('primary', { dynamic: true, variation: 'focus' })};

      & svg {
        fill: ${theme.color('primary', { dynamic: true, variation: 'focus' })};
      }
    }

    &[data-small='true'] {
      height: 18px;
    }

    &[data-large='true'] {
      height: 27px;
    }
  }

  &[data-outline='false'][data-link='false'] {
    border: 4px solid transparent;
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
    }

    &:focus,
    &:active {
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
      color: ${theme.color('secondary', {
        variation: 'focus',
        opacity: 0.45,
        useRootTheme: true,
      })};
      border-color: ${theme.color('secondary', {
        variation: 'focus',
        opacity: 0.45,
        useRootTheme: true,
      })};
    }

    &[data-link='true'] {
      color: ${theme.color('secondary', {
        variation: 'focus',
        opacity: 0.45,
        useRootTheme: true,
      })};
    }
  }
`

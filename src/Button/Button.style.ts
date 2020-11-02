import styled from 'styled-components'

import {
  ANIMATION_DURATIONS,
  ANIMATION_TIMING_FUNCTION,
} from '../animations/animations'
import { palette } from '../palette'
import { theme } from '../theme'

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
  position: relative;

  padding: 0 24px;
  height: 48px;
  max-width: 100%;
  font-size: 16px;
  line-height: 20px;
  font-family: ${theme.font()};
  border: none;

  transition-property: box-shadow, background-color;
  transition-duration: ${ANIMATION_DURATIONS.m}ms;
  transition-timing-function: ${ANIMATION_TIMING_FUNCTION};
  
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
    --button-border-width: 2px;
    --button-border-color: ${theme.color('secondary', { dynamic: true })};

    background-color: transparent;
    box-shadow: inset 0 0 0 var(--button-border-width) var(--button-border-color);
    color: ${theme.color('secondary', { dynamic: true })};

    & svg {
      fill: ${theme.color('secondary', { dynamic: true })};
    }
    }

    &:hover {
      --button-border-width: 4px;
    }

    &:focus,
    &:active {
      --button-border-width: 6px;
    }
  }

  &[data-link='true'] {
    background-color: transparent;
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
      --button-border-color: ${theme.color('primary', {
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
      
      --button-border-color: ${theme.color('secondary', {
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
    
   &[data-loading="true"][data-outline='false'][data-link='false'] {
     background: ${theme.color('primary', {
       dynamic: true,
       variation: 'hover',
     })};
     cursor: initial;
    pointer-events: none;
   }
`

export const ButtonLoadingContainer = styled.div`
  position: relative;
`

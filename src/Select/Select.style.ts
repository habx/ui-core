import colorUtils from 'color'
import styled, { css } from 'styled-components'

import fontScale from '../fontScale/fontScale'
import palette from '../palette'
import theme from '../theme'

export const Placeholder = styled.div`
  flex: 1 1 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 150ms ease-in-out;
`

export const IconsContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  color: ${theme.textColor({ opacity: 0.6, useRootTheme: true })};

  span {
    font-size: 18px;
    margin-left: 6px;
  }
`

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  flex: 0 0 auto;
  font-family: ${theme.font()};
  font-size: ${fontScale.moon.size}px;
  outline: none;
  user-select: none;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 4px;
  height: var(--select-height);
  padding: 0 16px;
  box-shadow: inset 0 0 0 var(--select-border-width) var(--select-border-color);
  background-color: var(--select-background-color);

  --select-height: 48px;
  --select-background-color: ${palette.darkBlue[200]};
  --select-border-width: 0;
  --select-border-color: ${palette.darkBlue[200]};

  &[data-small='true'] {
    --select-height: 36px;
    padding: 0 12px;
  }

  &[data-tiny='true'] {
    --select-height: 24px;
    padding: 0 6px;
    font-size: ${fontScale.asteroid.size}px;
  }

  &:not([data-light='true']) {
    --select-border-width: 1.5px;

    &[data-background='true'] {
      --select-background-color: #fff;
      --select-border-color: ${palette.darkBlue[200]};
    }

    ${({ color }) =>
      color &&
      css`
        --select-background-color: ${colorUtils(color).fade(0.85).string()};
        --select-border-color: ${colorUtils(color).fade(0.75).string()};
      `};

    & ${Placeholder} {
      color: ${theme.textColor({ useRootTheme: true, propName: 'color' })};

      &[data-empty='true'] {
        color: ${theme.textColor({ opacity: 0.6, useRootTheme: true })};
      }
    }
  }

  &[data-light='true'] {
    --select-background-color: #fff;
    font-size: ${fontScale.mars.size}px;
    padding: 0 12px;

    & ${Placeholder}:not([data-empty='true']) {
      color: ${theme.color('primary', { propName: 'color' })};
    }
  }

  transition: all 150ms ease-in-out;

  &:disabled,
  &[data-disabled='true'] {
    color: ${palette.darkBlue[700]};
    pointer-events: none;

    &:not([data-light='true']) {
      &[data-background='true'] {
        --select-background-color: ${theme.color('background', {
          opacity: 0.9,
          useRootTheme: true,
        })};
      }
    }

    &::placeholder,
    ${Placeholder} {
      color: ${theme.textColor({ opacity: 0.4, useRootTheme: true })};
    }
  }

  &:hover,
  &:focus,
  &[data-open='true'] {
    --select-border-color: ${palette.darkBlue[300]};

    & ${IconsContainer} {
      color: ${theme.textColor({ useRootTheme: true })};
    }
  }

  &:focus,
  &[data-open='true'] {
    &[data-light='true'] {
      background-color: ${palette.darkBlue[200]};
    }

    &:not([data-light='true']) {
      background-color: #fff;
    }
  }

  &[data-open='true'] {
    transition: z-index ease-in 0s;
    z-index: 10;
  }
`

export const SearchInput = styled.input.attrs(() => ({
  type: 'text',
}))`
  flex: 1 1 100%;

  border: none;
  padding: 0;
  background: none;
  font-size: inherit;
  align-self: stretch;
  min-width: 0;
  transition: color 150ms ease-in-out;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: none;

    &::placeholder {
      opacity: 0;
    }
  }
`

export const CustomIconContainer = styled.div`
  margin-right: 8px;
  align-self: stretch;
`

export const ResetIconContainer = styled.div`
  transition: opacity 150ms ease-in-out;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;

  &:not([data-visible='true']) {
    opacity: 0;
    pointer-events: none;
  }
`

export const IconRightContainer = styled.div`
  transition: opacity 150ms ease-in-out;

  &:not([data-visible='true']) {
    opacity: 0;
    pointer-events: none;
  }
`

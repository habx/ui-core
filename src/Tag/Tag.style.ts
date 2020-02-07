import styled from 'styled-components'

import palette from '../palette'
import theme from '../theme'

export const TagContainer = styled.button`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  user-select: none;
  vertical-align: middle;
  text-align: left;
  text-decoration: none;
  background-color: transparent;
  border: 1px solid ${palette.darkBlue[300]};
  font-family: ${theme.font()};
  line-height: 1;
  transition: background-color 50ms ease-in-out;
  color: ${theme.color('secondary', {
    opacity: 0.72,
  })};

  padding: 0 var(--tag-horizontal-padding);
  height: var(--tag-height);
  border-radius: calc(var(--tag-height) / 2);
  font-size: 12px;

  --tag-horizontal-padding: 12px;
  --tag-height: 32px;

  &:not([data-active='true']) {
    &:not(:disabled) {
      &[data-interactive='true'] {
        &:hover,
        &:focus,
        &:active {
          background-color: ${palette.darkBlue[200]};
        }

        &:hover {
          border-color: ${palette.darkBlue[200]};
        }

        &:focus,
        &:active {
          border-color: ${palette.blue[300]};
        }

        &:focus {
          border-width: 2px;
          padding: 0 calc(var(--tag-horizontal-padding) - 1px);
        }
      }

      &[data-background='true'] {
        color: ${theme.textColor({ opacity: 0.72, useRootTheme: true })};
        background-color: #fff;
        border-color: #fff;

        &[data-interactive='true'] {
          &:hover:not(:focus):not(:active) {
            background-color: rgba(255, 255, 255, 0.7);
          }
        }
      }
    }

    &:disabled {
      color: ${palette.darkBlue[300]};

      &[data-background='true'] {
        color: rgba(255, 255, 255, 0.3);
        border-color: rgba(255, 255, 255, 0.3);
      }
    }
  }

  &[data-active='true'] {
    border: none;
    color: ${theme.color('primary', { useRootTheme: true })};
    background-color: ${palette.blue[200]};
    padding: 0 calc(var(--tag-horizontal-padding) + 1px);

    &[data-background='true'] {
      background-color: #fff;
    }
  }

  &[data-large='true'] {
    --tag-horizontal-padding: 16px;
    --tag-height: 40px;
    font-size: 16px;
  }
`

export const SideElementContainer = styled.div`
  font-size: 0.9em;
  display: flex;
  margin-top: 1px;

  &[data-position='left'] {
    margin-right: 6px;
  }

  &[data-position='right'] {
    margin-left: 6px;
  }
`

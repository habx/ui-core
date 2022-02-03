import * as React from 'react'
import styled from 'styled-components'

import { transition } from '../animations'
import { theme } from '../theme'

import { LoadingBarProps } from './LoadingBar.interface'

export const LoadingBarStyled = styled.div`
  min-width: 300px;
  height: 8px;
  --loading-bar-progress: 0%;
  position: relative;
  overflow: hidden;
  background: ${theme.neutralColor(300)};

  &:after {
    transition: ${transition('width')};

    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    width: var(--loading-bar-progress);
    background: ${theme.color('primary')};
  }

  &[data-size='small'] {
    height: 4px;
  }

  &[data-infinite='true'] {
    @keyframes infinite-load {
      0% {
        left: 0;
        right: 100%;
        width: 0;
      }
      40% {
        width: 50%;
      }
      100% {
        left: 150%;
        right: 0;
      }
    }

    &:after {
      animation: infinite-load 2s ease-out infinite;
    }
  }
`

export const LoadingBar = React.forwardRef<HTMLDivElement, LoadingBarProps>(
  ({ loaded, total, style, size, ...props }, ref) => {
    const controlled = typeof loaded === 'number' && typeof total === 'number'
    const loadingBarStyle = controlled
      ? ({
          '--loading-bar-progress': `${(loaded / total) * 100}%`,
          ...style,
        } as unknown as React.CSSProperties)
      : style

    return (
      <LoadingBarStyled
        ref={ref}
        style={loadingBarStyle}
        data-infinite={!controlled}
        data-size={size}
        {...props}
      />
    )
  }
)

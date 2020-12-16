import * as React from 'react'
import styled from 'styled-components'

import { transition } from '../animations/animations'
import { theme } from '../theme'

import { LoadingBarProps } from './LoadingBar.interface'

export const LoadingBarStyled = styled.div`
  min-width: 300px;
  height: 8px;
  --loading-bar-progress: 0%;
  position: relative;

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
`

export const LoadingBar = React.forwardRef<HTMLDivElement, LoadingBarProps>(
  ({ loaded, total, style, ...props }, ref) => {
    const loadingBarStyle = ({
      '--loading-bar-progress': `${(loaded / total) * 100}%`,
      ...style,
    } as unknown) as React.CSSProperties
    return <LoadingBarStyled ref={ref} style={loadingBarStyle} {...props} />
  }
)

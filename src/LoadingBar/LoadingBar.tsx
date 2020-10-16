import * as React from 'react'
import styled from 'styled-components'

import palette from '../palette'
import theme from '../theme'

export const LoadingBarStyled = styled.div`
  min-width: 300px;
  height: 8px;
  --loading-bar-progress: 0%;
  position: relative;

  background: ${palette.darkBlue[300]};

  &:after {
    transition: width ease-in-out 150ms;

    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    width: var(--loading-bar-progress);
    background: ${theme.color('primary')};
  }
`

const LoadingBar = React.forwardRef<HTMLDivElement, LoadingBarProps>(
  ({ loaded, total, style, ...props }, ref) => {
    const loadingBarStyle = ({
      '--loading-bar-progress': `${(loaded / total) * 100}%`,
      ...style,
    } as unknown) as React.CSSProperties
    return <LoadingBarStyled ref={ref} style={loadingBarStyle} {...props} />
  }
)

export interface LoadingBarProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  loaded: number
  total: number
}

export default LoadingBar

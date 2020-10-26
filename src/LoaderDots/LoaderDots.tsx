import * as React from 'react'

import { DotsLoaderProps } from './LoaderDots.interface'
import { LoaderDotsContainer } from './LoaderDots.style'

export const LoaderDots: React.FunctionComponent<DotsLoaderProps> = ({
  small,
  large,
  ...props
}) => {
  return (
    <LoaderDotsContainer data-large={large} data-small={small} {...props}>
      <div>
        <span />
        <span /> <span />
      </div>
    </LoaderDotsContainer>
  )
}

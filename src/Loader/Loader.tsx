import * as React from 'react'

import { LoaderProps } from './Loader.interface'
import { Container, LoaderImg } from './Loader.style'

export const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ size, ...props }, ref) => {
    return (
      <Container {...props} ref={ref}>
        <LoaderImg
          data-size={size}
          src="https://habx.github.io/ui-core/illustrations/gif/loader-geometric-high.gif"
          alt="loading"
        />
      </Container>
    )
  }
)

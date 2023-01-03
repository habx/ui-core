import * as React from 'react'

import { LoaderProps } from './Loader.interface'
import { Container, LoaderImg } from './Loader.style'

export const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ size, ...props }, ref) => {
    return (
      <Container {...props} ref={ref}>
        <LoaderImg
          data-size={size}
          src="https://raw.githubusercontent.com/habx/ui-core/gh-pages/illustrations/gif/loader-geometric-high.gif"
          alt="loading"
        />
      </Container>
    )
  }
)

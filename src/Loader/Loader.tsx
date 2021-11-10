import * as React from 'react'

import { LoaderProps } from './Loader.interface'
import { Container, LoaderImg } from './Loader.style'

export const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ size, ...props }, ref) => {
    return (
      <Container {...props} ref={ref}>
        <LoaderImg
          data-size={size}
          src="https://res.cloudinary.com/habx/image/upload/illustrations/gif/loader-geometric-low.gif"
          alt="loading"
        />
      </Container>
    )
  }
)

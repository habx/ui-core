import * as React from 'react'

import LoaderProps from './Loader.interface'
import {
  Container,
  LoaderContainer,
  LoaderContent,
  OutlinedLoaderMask,
} from './Loader.style'

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>((props, ref) => {
  const { colored = true, size = 'medium', outline, ...rest } = props

  return (
    <Container>
      <LoaderContainer data-colored={colored} {...rest} size={size} ref={ref}>
        <LoaderContent data-colored={colored} size={size} />
        {outline && <OutlinedLoaderMask size={size} {...rest} />}
      </LoaderContainer>
    </Container>
  )
})

export default Loader

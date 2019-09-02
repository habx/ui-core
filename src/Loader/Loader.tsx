import * as React from 'react'

import LoaderProps from './Loader.interface'
import {
  LoaderContainer,
  LoaderContent,
  OutlinedLoaderMask,
} from './Loader.style'

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>((props, ref) => {
  const { colored = true, size = 'medium', outlined, ...rest } = props

  return (
    <React.Fragment>
      <LoaderContainer data-colored={colored} {...rest} size={size} ref={ref}>
        <LoaderContent data-colored={colored} size={size} />
      </LoaderContainer>
      {outlined && <OutlinedLoaderMask size={size} {...rest} />}
    </React.Fragment>
  )
})

export default Loader

import * as React from 'react'

import { isClientSide } from '../_internal/ssr'
import { useUniqID } from '../_internal/useUniqId'

import { LoaderProps } from './Loader.interface'
import {
  Container,
  LoaderContainer,
  LoaderContent,
  LoaderImg,
  MaskSvg,
} from './Loader.style'

export const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  (props, ref) => {
    const containerId = useUniqID()
    const pathId = useUniqID()

    const { colored = true, size = 'medium', outline = false, ...rest } = props
    const loaderClipPathContainerId = `loader-container-clip-path-${containerId}`
    const loaderPathId = `loader-path-${pathId}`
    const pathProps = React.useMemo(() => {
      switch (size) {
        case 'large':
          return { d: 'M0 13.0286L18 0L36 13.0714V36H0V13.0286Z' }
        case 'small':
          return { d: 'M0 6.51428L9 0L18 6.53571V18H0V6.51428Z' }
        case 'medium':
          return { d: 'M0 8.68571L12 0L24 8.71429V24H0V8.68571Z' }
      }
    }, [size])

    if (isClientSide && window.navigator?.userAgent?.includes('Edg')) {
      return (
        <Container>
          <LoaderImg
            data-size={size}
            src="//res.cloudinary.com/habx/image/upload/illustrations/gif/loader.gif"
            alt="loader"
          />
        </Container>
      )
    }
    return (
      <Container>
        <LoaderContainer
          data-colored={colored}
          {...rest}
          data-size={size}
          ref={ref}
          loaderClipPathContainerId={loaderClipPathContainerId}
        >
          <LoaderContent data-colored={colored} size={size} />
          <svg width="0" height="0">
            <defs>
              <clipPath id={loaderClipPathContainerId}>
                <path id={loaderPathId} {...pathProps} />
              </clipPath>
            </defs>
          </svg>
          {outline && (
            <MaskSvg>
              <use href={`#${loaderPathId}`} />
            </MaskSvg>
          )}
        </LoaderContainer>
      </Container>
    )
  }
)

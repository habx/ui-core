import * as React from 'react'
import styled from 'styled-components'

import { LoaderDots, DotsLoaderProps } from '../LoaderDots'

import { ButtonLoadingContainer } from './Button.style'

const ChildrenContainer = styled.div`
  opacity: 0;
`

const ButtonLoaderContainer = styled.div``

const ButtonLoader: React.FunctionComponent<DotsLoaderProps> = ({
  children,
  large,
  small,
  ...props
}) => {
  return (
    <ButtonLoaderContainer {...props}>
      <LoaderDots large={large} small={small} />
      <ChildrenContainer>{children}</ChildrenContainer>
    </ButtonLoaderContainer>
  )
}

const LoadingContainer: React.FunctionComponent<LoadingContainerInterface> = ({
  children,
  loading,
  ...props
}) =>
  loading ? (
    <ButtonLoadingContainer>
      <ButtonLoader {...props}>{children}</ButtonLoader>
    </ButtonLoadingContainer>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  )

interface LoadingContainerInterface extends DotsLoaderProps {
  loading: boolean
}

export default LoadingContainer

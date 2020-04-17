import * as React from 'react'

import withMarkdown from '../withMarkdown'

import ButtonProps from './Button.interface'
import {
  ButtonContainer,
  ButtonContent,
  ButtonLoadingContainer,
  SideElementContainer,
} from './Button.style'
import ButtonLoader from './ButtonLoader'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      elementLeft,
      elementRight,
      outline = false,
      link = false,
      small = false,
      large = false,
      fullWidth = false,
      dangerouslySetInnerHTML,
      type = 'button',
      loading = false,
      warning = false,
      ...rest
    } = props

    const LoadingContainer: React.FunctionComponent = ({
      children: loadingChildren,
    }) =>
      loading && !rest.disabled ? (
        <ButtonLoadingContainer>
          <ButtonLoader large={large} small={small} warning={warning}>
            {loadingChildren}
          </ButtonLoader>
        </ButtonLoadingContainer>
      ) : (
        <React.Fragment>{loadingChildren}</React.Fragment>
      )

    return (
      <ButtonContainer
        ref={ref}
        data-loading={loading}
        data-outline={outline}
        data-link={link}
        data-large={large}
        data-small={small}
        data-full-width={fullWidth}
        type={type}
        warning={warning}
        {...rest}
      >
        <LoadingContainer>
          {elementLeft && (
            <SideElementContainer
              data-position="left"
              data-testid="icon-left-container"
            >
              {elementLeft}
            </SideElementContainer>
          )}
          <ButtonContent
            dangerouslySetInnerHTML={dangerouslySetInnerHTML}
            data-testid="label-container"
          >
            {children}
          </ButtonContent>
          {elementRight && (
            <SideElementContainer
              data-position="right"
              data-testid="icon-right-container"
            >
              {elementRight}
            </SideElementContainer>
          )}
        </LoadingContainer>
      </ButtonContainer>
    )
  }
)

export default withMarkdown<HTMLButtonElement>({ inline: true })<ButtonProps>(
  Button
)

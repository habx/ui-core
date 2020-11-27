import * as React from 'react'

import { withMarkdown } from '../withMarkdown'

import { ButtonModes, ButtonProps } from './Button.interface'
import {
  ButtonContainer,
  ButtonContent,
  SideElementContainer,
} from './Button.style'
import { LoadingContainer } from './LoadingContainer'

const InnerButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      elementLeft,
      elementRight,
      outline = false,
      ghost = false,
      link = false,
      small = false,
      fullWidth = false,
      dangerouslySetInnerHTML,
      type = 'button',
      loading = false,
      ...rest
    } = props

    const mode = React.useMemo<ButtonModes>(() => {
      if (outline) {
        return ButtonModes.outline
      }

      if (ghost) {
        return ButtonModes.ghost
      }

      if (link) {
        return ButtonModes.link
      }

      return ButtonModes.solid
    }, [link, outline])

    return (
      <ButtonContainer
        ref={ref}
        data-loading={loading}
        data-mode={mode}
        data-small={small}
        data-full-width={fullWidth}
        type={type}
        {...rest}
      >
        <LoadingContainer loading={loading && !rest.disabled} small={small}>
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

export const Button = withMarkdown<HTMLButtonElement>({
  inline: true,
})<ButtonProps>(InnerButton)

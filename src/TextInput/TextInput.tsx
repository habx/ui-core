import * as React from 'react'

import { isFunction } from '../_internal/data'
import useHasColoredBackground from '../_internal/useHasColoredBackground'

import TextInputProps from './TextInput.interface'
import {
  IconButton,
  Input,
  InputContainer,
  LeftElementContainer,
  RightElementContainer,
} from './TextInput.style'

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const {
      small = false,
      error = false,
      light = false,
      className,
      style,
      elementRight,
      elementLeft,
      canReset,
      ...rest
    } = props

    const hasBackground = useHasColoredBackground()

    return (
      <InputContainer className={className} style={style} data-error={error}>
        <Input
          data-small={small}
          data-error={error}
          data-light={light}
          data-padding-left={!!elementLeft}
          data-background={hasBackground}
          {...rest}
          ref={ref}
        />
        {elementLeft && (
          <LeftElementContainer data-light={light}>
            {elementLeft}
          </LeftElementContainer>
        )}
        {(elementRight || canReset) && (
          <RightElementContainer data-light={light}>
            {elementRight && elementRight}
            {canReset && props.value && `${props.value}`.length > 0 && (
              <IconButton
                icon="close"
                onClick={e =>
                  isFunction(props.onChange) &&
                  props.onChange({
                    target: { ...e.target, value: '' },
                  } as React.ChangeEvent<HTMLInputElement>)
                }
              />
            )}
          </RightElementContainer>
        )}
      </InputContainer>
    )
  }
)

export default TextInput

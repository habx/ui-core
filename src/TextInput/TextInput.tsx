import * as React from 'react'

import { isFunction } from '../_internal/data'
import { useHasColoredBackground } from '../_internal/theme/useHasColoredBackground'
import { withLabel } from '../withLabel'

import { TextInputInnerProps } from './TextInput.interface'
import {
  IconButton,
  Input,
  InputContainer,
  SideElementContainer,
} from './TextInput.style'

const InnerTextInput = React.forwardRef<HTMLInputElement, TextInputInnerProps>(
  (props, ref) => {
    const {
      small = false,
      error = false,
      light = false,
      className,
      style,
      elementRight,
      elementLeft,
      containerRef,
      canReset,
      value,
      ...rest
    } = props

    const hasBackground = useHasColoredBackground()

    return (
      <InputContainer
        className={className}
        style={style}
        data-error={error}
        data-small={small}
        data-light={light}
        data-background={hasBackground}
        ref={containerRef}
      >
        {elementLeft && (
          <SideElementContainer data-position="left">
            {elementLeft}
          </SideElementContainer>
        )}
        <Input value={value ?? ''} {...rest} ref={ref} />
        {(elementRight || canReset) && (
          <SideElementContainer data-position="right">
            {elementRight && elementRight}
            {canReset && props.value && `${props.value}`.length > 0 && (
              <IconButton
                icon="close"
                onClick={(e) =>
                  isFunction(props.onChange) &&
                  props.onChange({
                    target: { ...e.target, value: '' },
                  } as React.ChangeEvent<HTMLInputElement>)
                }
              />
            )}
          </SideElementContainer>
        )}
      </InputContainer>
    )
  }
)

export const TextInput = withLabel<HTMLInputElement>({
  orientation: 'vertical',
})<TextInputInnerProps>(InnerTextInput)

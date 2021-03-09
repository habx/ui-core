import * as React from 'react'

import { isFunction } from '../_internal/data'
import { useMergedRef } from '../_internal/useMergedRef'
import { useHasColoredBackground } from '../useHasColoredBackground'
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
      bare = false,
      className,
      style,
      elementRight,
      elementLeft,
      containerRef,
      canReset,
      value,
      disabled,
      ...rest
    } = props

    const hasBackground = useHasColoredBackground()
    const inputRef = useMergedRef(ref)

    return (
      <InputContainer
        className={className}
        style={style}
        data-error={error}
        data-small={small}
        data-light={light}
        data-bare={bare}
        data-background={hasBackground}
        data-disabled={disabled}
        ref={containerRef}
        onClick={() => inputRef.current?.focus()}
        onTouchStart={() => inputRef.current?.focus()}
      >
        {elementLeft && (
          <SideElementContainer data-position="left">
            {elementLeft}
          </SideElementContainer>
        )}
        <Input
          value={value ?? ''}
          disabled={disabled}
          {...rest}
          ref={inputRef}
        />
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

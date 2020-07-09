import * as React from 'react'

import { isFunction } from '../_internal/data'
import useHasColoredBackground from '../_internal/useHasColoredBackground'
import useMergedRef from '../_internal/useMergedRef'
import Menu from '../Menu/Menu'
import MenuLine from '../MenuLine'
import withLabel from '../withLabel'

import { TextInputInnerProps } from './TextInput.interface'
import {
  IconButton,
  Input,
  InputContainer,
  LeftElementContainer,
  RightElementContainer,
} from './TextInput.style'
import useAutocomplete from './useAutocomplete'

const TextInput = React.forwardRef<HTMLInputElement, TextInputInnerProps>(
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
      value,
      autocompleteOptions,
      onOptionSelect,
      ...rest
    } = props

    const hasBackground = useHasColoredBackground()

    const mergedRef = useMergedRef<HTMLInputElement>(ref)

    const autocomplete = useAutocomplete({
      onOptionSelect,
      options: autocompleteOptions,
      value,
      ref: mergedRef,
    })

    return (
      <InputContainer className={className} style={style} data-error={error}>
        <Input
          data-small={small}
          data-error={error}
          data-light={light}
          data-padding-left={!!elementLeft}
          data-background={hasBackground}
          value={value ?? ''}
          {...rest}
          ref={mergedRef}
        />
        {autocomplete.open && (
          <Menu
            ref={autocomplete.menuRef}
            triggerRef={mergedRef}
            onClose={() => {}}
            open={autocomplete.open}
            withOverlay={false}
          >
            {autocomplete.visibleOptions.map((option, index) => (
              <MenuLine
                active={index === autocomplete.activeOptionIndex}
                key={`menuLine-${option}`}
                onClick={autocomplete.onOptionClick(option)}
              >
                {option}
              </MenuLine>
            ))}
          </Menu>
        )}
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
                onClick={(e) =>
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

export default withLabel<HTMLInputElement>({ orientation: 'vertical' })<
  TextInputInnerProps
>(TextInput)

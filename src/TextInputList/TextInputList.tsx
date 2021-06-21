import * as React from 'react'

import { AutocompleteInput } from '../AutocompleteInput'
import { Icon } from '../Icon'

import { TextInputListProps } from './TextInputList.interface'
import {
  TextInputListContainer,
  TagListContainer,
  ElementRightContainer,
  TextInputListTag,
  TextInputListAddIcon,
} from './TextInputList.style'

export const TextInputList = React.forwardRef<
  HTMLInputElement,
  TextInputListProps
>((props, ref) => {
  const {
    value = [],
    onChange,
    options,
    elementRight,
    small,
    onKeyDown,
    ...rest
  } = props

  const [localValue, setLocalValue] = React.useState<string | number>('')

  const handleValidateCurrent = () => {
    if (localValue !== '') {
      onChange([localValue, ...value])
      setLocalValue('')
    }
  }

  const handleRemoveItem = (index: number) =>
    onChange([...value.slice(0, index), ...value.slice(index + 1)])

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    onKeyDown?.(event)

    switch (event.key) {
      case 'Enter':
      case ',':
        event.preventDefault()
        event.stopPropagation()
        handleValidateCurrent()
        break

      case 'Backspace':
      case 'Delete':
        if (localValue === '' && value?.length > 0) {
          event.preventDefault()
          event.stopPropagation()

          const [newLocalValue, ...newValue] = value
          setLocalValue(newLocalValue)
          onChange(newValue)
        }
        break
    }
  }

  const filteredAutocompleteOptions = React.useMemo(() => {
    if (!options?.length) {
      return options
    }
    return options.filter((option) => !value.includes(option))
  }, [options, value])

  const handleOptionSelect = React.useCallback(
    (option: string) => onChange([option, ...value]),
    [onChange, value]
  )

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setLocalValue(e.target.value),
    []
  )

  return (
    <TextInputListContainer>
      <AutocompleteInput
        autoComplete="off"
        {...rest}
        small={small}
        ref={ref}
        value={localValue}
        onChange={handleChange}
        options={filteredAutocompleteOptions}
        onOptionSelect={handleOptionSelect}
        onKeyDown={handleKeyDown}
        elementRight={
          <ElementRightContainer>
            {elementRight}
            <TextInputListAddIcon
              small
              background="grey"
              icon="add"
              onClick={handleValidateCurrent}
              disabled={localValue.toString().length === 0}
            />
          </ElementRightContainer>
        }
      />
      {value?.length > 0 && (
        <TagListContainer>
          {value.map((el, index) => (
            <TextInputListTag
              interactive
              key={`${el}-${index}`}
              onClick={() => handleRemoveItem(index)}
              small={small}
              elementRight={<Icon icon="close" />}
            >
              {el}
            </TextInputListTag>
          ))}
        </TagListContainer>
      )}
    </TextInputListContainer>
  )
})

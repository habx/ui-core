import * as React from 'react'

import { isFunction } from '../_internal/data'
import { AutocompleteInput } from '../AutocompleteInput'
import { Icon } from '../Icon'
import { IconButton } from '../IconButton'

import { TextInputListProps } from './TextInputList.interface'
import {
  TextInputListContainer,
  TagListContainer,
  ElementRightContainer,
  TextInputListTag,
} from './TextInputList.style'

export const TextInputList = React.forwardRef<
  HTMLInputElement,
  TextInputListProps
>((props, ref) => {
  const { value = [], onChange, options, elementRight, ...rest } = props
  const [localValue, setLocalValue] = React.useState<string | number>('')

  const handleValidateCurrent = () => {
    if (localValue !== '') {
      onChange([localValue, ...value])
      setLocalValue('')
    }
  }

  const handleRemoveItem = (index: number) =>
    onChange([...value.slice(0, index), ...value.slice(index + 1)])

  const wrapEvent = (name: keyof typeof props, eventHandler: Function) => (
    ...args: any[]
  ) => {
    eventHandler(...args)

    if (isFunction(props[name] as Function)) {
      props[name](...args)
    }
  }

  const handleKeyDown = wrapEvent('onKeyDown', (event: KeyboardEvent) => {
    // eslint-disable-next-line default-case
    switch (event.keyCode) {
      case 188: // Enter
      case 13: // Comma
        handleValidateCurrent()

        break
      case 8: // Backspace
      case 46:
        if (localValue === '' && value?.length > 0) {
          setLocalValue(value[0])
          const newValue = [...value]
          newValue.shift()
          onChange(newValue)

          event.preventDefault()
          event.stopPropagation()

          break
        }
    }
  })

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
        {...rest}
        ref={ref}
        value={localValue}
        onChange={handleChange}
        options={filteredAutocompleteOptions}
        onOptionSelect={handleOptionSelect}
        onKeyDown={handleKeyDown}
        elementRight={
          <ElementRightContainer>
            {elementRight}
            {`${localValue}`?.length > 0 && (
              <IconButton tiny icon="add" onClick={handleValidateCurrent} />
            )}
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
              small
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

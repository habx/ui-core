import * as React from 'react'

import { isFunction } from '../_internal/data'
import IconButton from '../IconButton'
import Text from '../Text'

import TextInputListProps from './TextInputList.interface'
import {
  TextInputListContainer,
  TextInputItem,
  Input,
  TagListContainer,
} from './TextInputList.style'

const TextInputList: React.FunctionComponent<TextInputListProps> = ({
  value = [],
  onChange,
  autocompleteOptions,
  ...props
}) => {
  const [localValue, setLocalValue] = React.useState<string | number>('')

  const handleValidateCurrent = () => {
    if (localValue !== '') {
      onChange([...value, localValue])
      setLocalValue('')
    }
  }

  const handleRemoveItem = (index: number) =>
    onChange([...value.slice(0, index), ...value.slice(index + 1)])

  const wrapEvent = (name: string, eventHandler: Function) => (
    ...args: any[]
  ) => {
    eventHandler(...args)

    const propName = name as keyof typeof props
    if (isFunction(props[propName] as Function)) {
      props[propName](...args)
    }
  }

  const handleBlur = wrapEvent('onBlur', () => handleValidateCurrent())

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
          setLocalValue(value[value.length - 1])
          const newValue = [...value]
          newValue.pop()
          onChange(newValue)

          event.preventDefault()
          event.stopPropagation()

          break
        }
    }
  })

  const filteredAutocompleteOptions = React.useMemo(() => {
    if (!autocompleteOptions?.length) {
      return autocompleteOptions
    }
    return autocompleteOptions.filter((option) => !value.includes(option))
  }, [autocompleteOptions, value])

  const handleAutocompleteOptionClick = React.useCallback(
    (option: string) => onChange([option, ...value]),
    [onChange, value]
  )

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setLocalValue(e.target.value),
    []
  )

  return (
    <TextInputListContainer>
      {value?.length > 0 && (
        <TagListContainer>
          {value.map((el, index) => (
            <TextInputItem key={index}>
              <Text>{el}</Text>
              <IconButton
                tiny
                icon="close"
                onClick={() => handleRemoveItem(index)}
              />
            </TextInputItem>
          ))}
        </TagListContainer>
      )}
      <Input
        {...props}
        value={localValue}
        onChange={handleChange}
        autocompleteOptions={filteredAutocompleteOptions}
        onAutoCompleteOptionClick={handleAutocompleteOptionClick}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        title="Entrée ou virgule pour ajouter à la liste"
      />
    </TextInputListContainer>
  )
}

export default TextInputList

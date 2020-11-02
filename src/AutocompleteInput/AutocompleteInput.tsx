import * as React from 'react'

import { useMergedRef } from '../_internal/useMergedRef'
import { Loader } from '../Loader'
import { Menu } from '../Menu'
import { MenuLine } from '../MenuLine'
import { TextInput } from '../TextInput'

import { AutocompleteInputProps } from './AutocompleteInput.interface'
import { useAutocomplete } from './useAutocomplete'

export const AutocompleteInput = React.forwardRef<
  HTMLInputElement,
  AutocompleteInputProps
>((props, ref) => {
  const { value, options, onOptionSelect, loading, ...inputProps } = props
  const mergedRef = useMergedRef<HTMLInputElement>(ref)

  const autocomplete = useAutocomplete({
    onOptionSelect,
    options: options,
    value,
    ref: mergedRef,
    loading,
  })

  return (
    <React.Fragment>
      <TextInput value={value} ref={mergedRef} {...inputProps} />
      {autocomplete.open && (
        <Menu
          ref={autocomplete.menuRef}
          triggerRef={mergedRef}
          onClose={() => {}}
          open={autocomplete.open}
          withOverlay={false}
        >
          {loading && <Loader size="small" />}
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
    </React.Fragment>
  )
})

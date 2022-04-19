import * as React from 'react'

import { isNil } from '../_internal/data'
import { searchInString } from '../_internal/strings'
import { useDisableScroll } from '../_internal/useDisableScroll'

import {
  AutocompleteActions,
  AutocompleteActionTypes,
  AutocompleteState,
} from './AutocompleteInput.interface'

const reducer: React.Reducer<AutocompleteState, AutocompleteActions> = (
  state,
  action
) => {
  switch (action.type) {
    case AutocompleteActionTypes.resetActiveOption:
      return {
        ...state,
        activeOptionIndex: null,
      }
    case AutocompleteActionTypes.setActiveOptionIndex:
      return {
        ...state,
        activeOptionIndex: action.value,
      }
    case AutocompleteActionTypes.setOpen:
      return {
        ...state,
        open: action.value,
      }
  }
}

type UseAutocompleteOptions = {
  options?: string[]
  loading?: boolean
  ref: React.RefObject<HTMLInputElement>
  value: string | number | readonly string[] | string[] | undefined
  onOptionSelect?: (option: string) => void
}

const MAX_AUTOCOMPLETE_OPTIONS = 3
const DEFAULT_OPTIONS: string[] = []

export const useAutocomplete = ({
  options = DEFAULT_OPTIONS,
  ref,
  value = '',
  onOptionSelect,
  loading,
}: UseAutocompleteOptions) => {
  const [state, dispatch] = React.useReducer(reducer, {
    open: false,
    activeOptionIndex: null,
  })

  const menuRef = React.useRef<HTMLDivElement>(null)

  const deferredValue = React.useDeferredValue(value)
  const visibleOptions = React.useMemo(
    () =>
      loading
        ? []
        : options
            ?.filter(
              (option) =>
                searchInString(option, `${deferredValue}`) &&
                option !== deferredValue
            )
            .slice(0, MAX_AUTOCOMPLETE_OPTIONS) ?? [],
    [options, deferredValue, loading]
  )

  React.useEffect(() => {
    dispatch({ type: AutocompleteActionTypes.resetActiveOption })
  }, [visibleOptions])

  const handleFakeOnChange = React.useCallback(
    (fakeValue: string) => (e?: React.MouseEvent<HTMLLIElement>) => {
      e?.preventDefault()
      e?.stopPropagation()
      if (onOptionSelect) {
        onOptionSelect(fakeValue)
      } else {
        const input = ref.current as HTMLInputElement & { _valueTracker: any }
        if (input) {
          const lastValue = input.value
          input.value = fakeValue
          const event = new Event('input', { bubbles: true })
          // https://github.com/facebook/react/issues/11488#issuecomment-626192358
          const tracker = input._valueTracker
          if (tracker) {
            tracker.setValue(lastValue)
          }
          input.dispatchEvent(event)
          dispatch({ type: AutocompleteActionTypes.setOpen, value: !e })
        }
      }
    },
    [onOptionSelect, ref]
  )

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        options?.length > 0 &&
        ref.current?.contains(e.target as Node) &&
        !state.open
      ) {
        dispatch({ type: AutocompleteActionTypes.setOpen, value: true })
      }
      if (!ref.current?.contains(e.target as Node) && state.open) {
        dispatch({ type: AutocompleteActionTypes.setOpen, value: false })
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, shiftKey } = event

      if (state.open) {
        if (key === 'ArrowDown' || (key === 'Tab' && !shiftKey)) {
          event.preventDefault()
          dispatch({
            type: AutocompleteActionTypes.setActiveOptionIndex,
            value:
              !isNil(state.activeOptionIndex) &&
              state.activeOptionIndex + 1 < visibleOptions.length
                ? state.activeOptionIndex + 1
                : 0,
          })
        }

        if (key === 'ArrowUp' || (key === 'Tab' && shiftKey)) {
          event.preventDefault()
          dispatch({
            type: AutocompleteActionTypes.setActiveOptionIndex,
            value:
              !isNil(state.activeOptionIndex) && state.activeOptionIndex > 0
                ? state.activeOptionIndex - 1
                : visibleOptions.length - 1,
          })
        }
        if (key === 'Enter' && !isNil(state.activeOptionIndex)) {
          event.preventDefault()
          handleFakeOnChange(visibleOptions[state.activeOptionIndex])()
          dispatch({ type: AutocompleteActionTypes.resetActiveOption })
        }
      }
    }

    window.addEventListener('click', handleClick)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('click', handleClick)
    }
  }, [handleFakeOnChange, options, ref, state, visibleOptions])

  useDisableScroll({ enabled: state.open, ignoreRef: menuRef })

  return {
    menuRef,
    visibleOptions,
    onOptionClick: handleFakeOnChange,
    open: state.open && (visibleOptions.length > 0 || loading),
    activeOptionIndex: state.activeOptionIndex,
  }
}

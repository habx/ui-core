import * as React from 'react'
import { ChangeEvent } from 'react'

import { isString } from '../_internal/data'
import { searchInString } from '../_internal/strings'
import { stringifyColor } from '../color'

import {
  SelectProps,
  ActionType,
  EnrichedSelectOption,
  SelectAction,
  SelectOption,
  SelectState,
} from './Select.interface'

const DEFAULT_MULTI_VALUE: any[] = []
const DEFAULT_ON_CHANGE = () => {}

const reducer: React.Reducer<SelectState, SelectAction> = (state, action) => {
  switch (action.type) {
    case ActionType.UpdateQuery: {
      return { ...state, query: action.value, isOpened: true }
    }

    case ActionType.Open: {
      if (state.isOpened) {
        return state
      }

      return {
        ...state,
        query: '',
        isOpened: true,
        focusedOption: undefined,
      }
    }

    case ActionType.Close: {
      if (!state.isOpened) {
        return state
      }

      return { ...state, isFocused: false, isOpened: false }
    }

    case ActionType.Focus: {
      return { ...state, isFocused: true, isOpened: true }
    }

    case ActionType.SetShowResetIcon: {
      if (state.showResetIcon === action.value) {
        return state
      }

      return { ...state, showResetIcon: action.value }
    }

    case ActionType.SetFocusedOption: {
      return { ...state, focusedOption: action.value }
    }

    default: {
      return state
    }
  }
}

const INITIAL_STATE: SelectState = {
  isOpened: false,
  query: '',
  showResetIcon: false,
  focusedOption: null,
  isFocused: false,
}

export const useSelect = ({
  value: rawValue,
  multi,
  options,
  onChange = DEFAULT_ON_CHANGE,
}: Pick<SelectProps, 'value' | 'multi' | 'options' | 'onChange'>) => {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)

  const value = React.useMemo(() => {
    if (multi) {
      return rawValue ?? DEFAULT_MULTI_VALUE
    }
    return rawValue
  }, [multi, rawValue])

  const selectedOptions = React.useMemo<SelectOption[]>(() => {
    if (multi && Array.isArray(value)) {
      const multiValue = value as any[]
      return options.filter((option) =>
        multiValue?.some((val) => val === option.value)
      )
    }

    return options.filter((option) => option.value === value)
  }, [multi, options, value])

  const visibleOptions = React.useMemo<EnrichedSelectOption[]>(
    () =>
      options
        .filter((option) => {
          const keywords = [
            `${option.value}`,
            ...(isString(option.label) ? [option.label] : []),
            ...(option.keywords ?? []),
          ]

          return keywords.some((keyword) =>
            searchInString(keyword, state.query)
          )
        })
        .map((option) => ({
          ...option,
          selected: selectedOptions.some(
            (option2) => option2.value === option.value
          ),
        })),
    [selectedOptions, options, state.query]
  )

  const label = React.useMemo(
    () =>
      selectedOptions.length > 0
        ? selectedOptions.map((option) => option.label)
        : null,
    [selectedOptions]
  )

  const color = React.useMemo(() => {
    const result = selectedOptions.find((el) => el.color)?.color

    return result && stringifyColor(result)
  }, [selectedOptions])

  const areAllOptionsSelected = React.useMemo(() => {
    if (multi && Array.isArray(value)) {
      const multiValue = value as any[]

      return options.length === multiValue.length
    }

    return false
  }, [multi, options.length, value])

  const handleSearch = React.useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: ActionType.UpdateQuery, value: e.target.value }),
    []
  )

  const handleClick = React.useCallback(
    () => dispatch({ type: ActionType.Focus }),
    []
  )

  const handleHover = React.useCallback(
    () => dispatch({ type: ActionType.Open }),
    []
  )

  const handleClose = React.useCallback(
    () => dispatch({ type: ActionType.Close }),
    []
  )

  const handleSelectOne = React.useCallback(
    (option: SelectOption) => {
      onChange(option.value)
      dispatch({ type: ActionType.SetFocusedOption, value: option.value })
    },
    [onChange]
  )

  const handleSelectMulti = React.useCallback(
    (option: SelectOption) => {
      const multiValue = (value ?? []) as any[]

      const newValue = multiValue.includes(option.value)
        ? multiValue.filter((el) => el !== option.value)
        : [...multiValue, option.value]

      onChange(newValue)
    },
    [onChange, value]
  )

  const handleSelect = React.useCallback(
    (option: SelectOption) => {
      dispatch({ type: ActionType.SetFocusedOption, value: undefined })

      if (multi) {
        handleSelectMulti(option)
      } else {
        handleSelectOne(option)
        handleClose()
      }
    },
    [handleSelectMulti, handleSelectOne, handleClose, multi]
  )

  const handleSelectAll = React.useCallback(
    (selectAll: boolean) => {
      if (selectAll) {
        onChange(options.map((option) => option.value))
      } else {
        onChange([])
      }
    },
    [onChange, options]
  )

  const handleReset = React.useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      dispatch({ type: ActionType.SetShowResetIcon, value: false })
      onChange(multi ? [] : null)
    },
    [multi, onChange]
  )

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, shiftKey } = event

      if (state.isOpened) {
        if (key === 'ArrowDown' || (key === 'Tab' && !shiftKey)) {
          event.preventDefault()

          const focusedIndex = visibleOptions.findIndex(
            (option) => option.value === state.focusedOption
          )

          dispatch({
            type: ActionType.SetFocusedOption,
            value:
              options[
                focusedIndex < visibleOptions.length - 1 ? focusedIndex + 1 : 0
              ]?.value,
          })
        }

        if (key === 'ArrowUp' || (key === 'Tab' && shiftKey)) {
          event.preventDefault()

          const focusedIndex = visibleOptions.findIndex(
            (option) => option.value === state.focusedOption
          )

          dispatch({
            type: ActionType.SetFocusedOption,
            value:
              options[
                focusedIndex > 0 ? focusedIndex - 1 : visibleOptions.length - 1
              ]?.value,
          })
        }

        if (key === 'Enter') {
          const focusedOption = visibleOptions.find(
            (option) => option.value === state.focusedOption
          )
          if (focusedOption) {
            handleSelect(focusedOption)
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [
    handleSelect,
    options,
    state.focusedOption,
    state.isOpened,
    visibleOptions,
  ])

  const actions = {
    onReset: handleReset,
    onClick: handleClick,
    onHover: handleHover,
    onClose: handleClose,
    onSelectAll: handleSelectAll,
    onSelect: handleSelect,
    onSearch: handleSearch,
  }

  const fullState = {
    ...state,
    label,
    visibleOptions,
    areAllOptionsSelected,
    color,
    selectedOptions,
  }

  return [fullState, actions] as const
}

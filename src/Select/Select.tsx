import get from 'lodash.get'
import * as React from 'react'
import { createPortal } from 'react-dom'

import { isNil, has } from '../_internal/data'
import { isClientSide, getDOMRect } from '../_internal/ssr'
import { formOption } from '../_internal/types'
import useHasColoredBackground from '../_internal/useHasColoredBackground'
import useMergedRef from '../_internal/useMergedRef'
import Icon from '../Icon'

import Options from './Options'
import {
  useOptions,
  usePlaceholder,
  useSelectedOptions,
  useValue,
  useValueFormat,
  useVisibleOptions,
  FORMAT_VALUE_FULL,
} from './Select.hooks'
import SelectProps, {
  SelectState,
  SelectAction,
  ActionType,
} from './Select.interface'
import {
  SelectContainer,
  SelectContent,
  SearchInput,
  LabelIcons,
  CustomIconContainer,
  Placeholder,
  ResetIcon,
  Overlay,
} from './Select.style'

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (baseProps, ref) => {
    const props = { ...baseProps }

    const {
      multi = false,
      light = false,
      small = false,
      description,
      placeholderClassName,
      elementLeft,
      elementRight,
      annotation,
      canReset = true,
      disabled,
      filterable = false,
      compact = false,
      canSelectAll,
      selectAllLabel,
      optionDisabled = () => false,
      value: rawValue,
      options: rawOptions,
      valueFormat: rawValueFormat,
      placeholder: rawPlaceholder,
      onChange = () => null,
      ...rest
    } = props

    const inputRef = React.useRef<HTMLInputElement>(null)
    const wrapperRef = useMergedRef<HTMLDivElement>(ref)
    const hasBackground = useHasColoredBackground()

    const reducer: React.Reducer<SelectState, SelectAction> = (
      state,
      action
    ) => {
      switch (action.type) {
        case ActionType.UpdateQuery: {
          return { ...state, query: action.value, isOpened: true }
        }

        case ActionType.ToggleVisibility: {
          if (!state.isOpened && inputRef.current) {
            inputRef.current.focus()
          }

          return {
            ...state,
            query: '',
            isOpened: !state.isOpened,
            wrapperRect: wrapperRef.current
              ? wrapperRef.current.getBoundingClientRect()
              : ({} as ClientRect),
          }
        }

        case ActionType.RemoveFocusItem: {
          return { ...state, focusedItem: null }
        }

        case ActionType.HoverReset: {
          return { ...state, hoverReset: action.value }
        }

        case ActionType.AddFocusItem: {
          if (!action.value) {
            return state
          }
          return { ...state, focusedItem: action.value }
        }

        case ActionType.Resize: {
          const wrapperRect = wrapperRef.current
            ? wrapperRef.current.getBoundingClientRect()
            : ({} as ClientRect)

          const CLIENT_RECT_KEYS: (keyof ClientRect)[] = [
            'height',
            'width',
            'top',
            'left',
            'right',
            'bottom',
          ]

          if (
            CLIENT_RECT_KEYS.every(
              key => wrapperRect[key] === state.wrapperRect[key]
            )
          ) {
            return state
          }

          return {
            ...state,
            wrapperRect,
          }
        }

        default: {
          throw new Error('Thunder Select : Unknown action')
        }
      }
    }

    const initialState: SelectState = {
      isOpened: false,
      query: '',
      hoverReset: false,
      wrapperRect: getDOMRect(),
      focusedItem:
        rawValueFormat === 'simple'
          ? get(rawValue, 'value') || rawValue
          : rawValue,
    }

    const [state, dispatch] = React.useReducer(reducer, initialState)

    const options = useOptions({ rawOptions })
    const value = useValue({ rawValue, multi, options })
    const valueFormat = useValueFormat({ rawValueFormat, rawValue, multi })
    const visibleOptions = useVisibleOptions({ query: state.query, options })
    const selectedOptions = useSelectedOptions({ options, value, multi })
    const placeholder = usePlaceholder({
      rawPlaceholder,
      selectedOptions,
      multi,
    })

    const getCleanValue = React.useCallback(
      newValue =>
        valueFormat === FORMAT_VALUE_FULL ? newValue : get(newValue, 'value'),
      [valueFormat]
    )

    const handleSearch = React.useCallback(
      e => {
        dispatch({ type: ActionType.UpdateQuery, value: e.target.value })
      },
      [dispatch]
    )

    const handleToggle = React.useCallback(() => {
      dispatch({ type: ActionType.ToggleVisibility })
    }, [dispatch])

    const handleSelectOne = React.useCallback(
      option => {
        const cleanOption = getCleanValue(option)
        onChange(cleanOption)
        dispatch({ type: ActionType.AddFocusItem, value: cleanOption })
      },
      [dispatch, getCleanValue, onChange]
    )

    const handleSelectMulti = React.useCallback(
      option => {
        const isSelected = (value as formOption[]).some((el: formOption) =>
          has(el, 'value') ? el.value === option.value : el === option.value
        )

        if (isSelected) {
          const newValue = (value as formOption[])
            .filter((el: formOption) =>
              has(el, 'value') ? el.value !== option.value : el !== option.value
            )
            .map(getCleanValue)
          onChange(newValue)
        } else {
          const newValue = [...(value as formOption[]), option].map(
            getCleanValue
          )
          onChange(newValue)
        }
      },
      [getCleanValue, onChange, value]
    )

    const handleSelect = React.useCallback(
      option => {
        dispatch({ type: ActionType.RemoveFocusItem })

        if (multi) {
          handleSelectMulti(option)
        } else {
          handleSelectOne(option)
          handleToggle()
        }
      },
      [dispatch, handleSelectMulti, handleSelectOne, handleToggle, multi]
    )

    const handleSelectAll = React.useCallback(
      (selectAll: boolean) => {
        if (selectAll) {
          onChange(options.map(getCleanValue))
        } else {
          onChange([])
        }
      },
      [getCleanValue, onChange, options]
    )

    const handleReset = React.useCallback(
      e => {
        e.stopPropagation()
        dispatch({ type: ActionType.HoverReset, value: false })
        onChange(multi ? [] : null)
      },
      [multi, onChange]
    )

    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        const { key } = event

        if (state.isOpened) {
          const focusedIndex = visibleOptions.findIndex(
            el =>
              el === state.focusedItem ||
              get(state, 'focusedItem.value') === get(el, 'value') ||
              get(el, 'value') === state.focusedItem
          )

          if (key === 'ArrowDown' && focusedIndex < options.length) {
            event.preventDefault()
            dispatch({
              type: ActionType.AddFocusItem,
              value: options[focusedIndex + 1],
            })
          }

          if (key === 'ArrowUp' && focusedIndex > 0) {
            event.preventDefault()
            dispatch({
              type: ActionType.AddFocusItem,
              value: options[focusedIndex - 1],
            })
          }

          if (key === 'Enter' && focusedIndex >= 0) {
            handleSelect(state.focusedItem)
          }
        }
      }

      const handleResize = () => {
        dispatch({ type: ActionType.Resize })
      }

      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('resize', handleResize)

      handleResize()

      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('resize', handleResize)
      }
    }, [
      dispatch,
      handleSelect,
      options,
      state,
      state.focusedItem,
      state.isOpened,
      visibleOptions,
    ])

    const handleMouseEnter = (e: React.MouseEvent) => {
      dispatch({ type: ActionType.HoverReset, value: true })
      e.preventDefault()
      e.stopPropagation()
    }
    const handleMouseLeave = (e: React.MouseEvent) => {
      dispatch({ type: ActionType.HoverReset, value: false })
      e.preventDefault()
      e.stopPropagation()
    }

    const isOptionSelected = React.useCallback(
      option => {
        if (multi) {
          return (value as formOption[]).some(
            (el: formOption) => el.value === option.value
          )
        }

        return value ? option.value === (value as formOption).value : false
      },
      [multi, value]
    )

    const hasValue = multi
      ? Array.isArray(rawValue) && rawValue.length > 0
      : !isNil(rawValue)

    const areAllOptionsSelected = React.useMemo(() => {
      if (!multi || !value) return false
      return options.length === (value as formOption[]).length
    }, [multi, options.length, value])

    return (
      <SelectContainer
        ref={wrapperRef}
        data-disabled={disabled}
        data-open={state.isOpened}
        data-background={hasBackground}
        data-light={light}
        {...rest}
      >
        <SelectContent
          data-testid="select-content"
          data-open={state.isOpened}
          data-small={small}
          className={placeholderClassName}
          onClick={handleToggle}
        >
          {elementLeft && (
            <CustomIconContainer>{elementLeft}</CustomIconContainer>
          )}
          {filterable ? (
            <SearchInput
              data-testid="select-input"
              value={state.query}
              placeholder={placeholder}
              onChange={handleSearch}
              ref={inputRef}
            />
          ) : (
            <Placeholder
              data-testid="select-placeholder"
              data-empty={!hasValue}
            >
              {placeholder}
            </Placeholder>
          )}
          <LabelIcons
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {canReset && state.hoverReset && (
              <ResetIcon
                data-testid="select-reset-icon"
                data-visible={!disabled && hasValue}
                onClick={handleReset}
                icon="close"
              />
            )}
            {(!canReset || !state.hoverReset || !hasValue) &&
              (elementRight || (
                <Icon
                  icon={state.isOpened ? 'chevron-north' : 'chevron-south'}
                />
              ))}
          </LabelIcons>
        </SelectContent>
        {state.isOpened &&
          isClientSide &&
          createPortal(
            <Overlay
              onClick={e => {
                e.stopPropagation()
                handleToggle()
              }}
            />,
            document.body
          )}
        <Options
          optionDisabled={optionDisabled}
          options={visibleOptions}
          open={state.isOpened}
          multi={multi}
          allSelected={areAllOptionsSelected}
          onSelect={handleSelect}
          onSelectAll={handleSelectAll}
          isOptionSelected={isOptionSelected}
          focusedItem={state.focusedItem}
          annotation={annotation}
          description={description}
          compact={compact}
          canSelectAll={!!canSelectAll}
          selectAllLabel={selectAllLabel}
          onClose={handleToggle}
          wrapperRect={state.wrapperRect}
        />
      </SelectContainer>
    )
  }
)

export default Select

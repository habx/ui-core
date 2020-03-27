import * as React from 'react'

import { has, isNil, isString, some } from '../_internal/data'
import { searchInString } from '../_internal/strings'
import { formOption, formValue } from '../_internal/types'

import { Option } from './Options/Options.interface'

export const FORMAT_VALUE_FULL = 'full'

export const FORMAT_VALUE_SIMPLE = 'simple'

export const useOptions = ({ rawOptions }: { rawOptions: formValue[] }) =>
  React.useMemo<Option[]>(() => {
    if (!rawOptions) {
      return []
    }

    return rawOptions.map((option) => ({
      value: (option as formOption)?.value ?? option,
      label: (option as formOption)?.label ?? option,
      disabled: (option as formOption)?.disabled ?? false,
    }))
  }, [rawOptions])

export const useValue = ({
  rawValue,
  multi,
  options,
}: {
  rawValue?: formValue | formValue[]
  multi: boolean
  options: formOption[]
}) =>
  React.useMemo(() => {
    const cleanValue = (value: formValue) => {
      if (isNil(value)) {
        return { value, label: 'No value' }
      }

      if (has(value as formOption, 'value')) {
        return value
      }

      const matchingOption = options.find((el) => el.value === value)

      return {
        value,
        label: matchingOption ? matchingOption.label : value,
      } as formValue
    }

    if (multi) {
      return rawValue ? (rawValue as formValue[]).map(cleanValue) : []
    }

    return cleanValue(rawValue as formValue)
  }, [multi, rawValue, options])

export const useValueFormat = ({
  rawValueFormat,
  rawValue,
  multi,
}: {
  rawValue?: formValue | formValue[]
  multi: boolean
  rawValueFormat: 'full' | 'simple' | undefined
}) =>
  React.useMemo(() => {
    if (
      [FORMAT_VALUE_FULL, FORMAT_VALUE_SIMPLE].includes(rawValueFormat || '')
    ) {
      return rawValueFormat
    }

    if (multi) {
      if (!rawValue || (rawValue as formValue[]).length === 0) {
        return FORMAT_VALUE_SIMPLE
      }

      return (rawValue as formOption[]).length > 0 &&
        has((rawValue as formOption[])[0], 'value')
        ? FORMAT_VALUE_FULL
        : FORMAT_VALUE_SIMPLE
    }

    return has(rawValue as object, 'value')
      ? FORMAT_VALUE_FULL
      : FORMAT_VALUE_SIMPLE
  }, [rawValueFormat, multi, rawValue])

export const useVisibleOptions = ({
  query,
  options,
}: {
  query: string
  options: Option[]
}) =>
  React.useMemo<Option[]>(
    () =>
      options.filter((option) => {
        const matchValue = searchInString(`${option.value}`, query)
        const matchLabel =
          isString(option.label) && searchInString(option.label, query)
        return matchValue || matchLabel
      }),
    [options, query]
  )

export const useSelectedOptions = ({
  options,
  value,
  multi,
}: {
  options: Option[]
  value: formValue | formValue[]
  multi: boolean
}) =>
  React.useMemo(() => {
    if (!value) {
      return null
    }

    if (multi) {
      return options.filter((el) =>
        some(value as formOption[], (el2) => el2.value === el.value)
      )
    }

    return options.find((el) => el.value === (value as formOption).value)
  }, [multi, options, value])

export const usePlaceholder = ({
  rawPlaceholder,
  selectedOptions,
  multi,
}: {
  rawPlaceholder?: string
  selectedOptions?: formOption | formOption[] | null
  multi: boolean
}) =>
  React.useMemo(() => {
    if (multi) {
      const options = selectedOptions as formOption[]
      if (selectedOptions && options.length > 0) {
        return options.map((option) => option.label).join(', ')
      }

      return rawPlaceholder
    }

    return selectedOptions
      ? (selectedOptions as formOption).label
      : rawPlaceholder
  }, [selectedOptions, rawPlaceholder, multi])

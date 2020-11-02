import * as React from 'react'

import { AutocompleteInputProps } from '../AutocompleteInput'

type valueType = (string | number)[]

export interface TextInputListProps
  extends Pick<
    AutocompleteInputProps,
    Exclude<keyof AutocompleteInputProps, 'value' | 'onChange'>
  > {
  value: valueType
  onChange: (value: valueType, event?: React.ChangeEvent) => void
}

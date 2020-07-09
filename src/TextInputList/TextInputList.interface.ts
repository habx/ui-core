import * as React from 'react'

import TextInputProps from '../TextInput/TextInput.interface'

type valueType = (string | number)[]

export default interface TextInputListProps
  extends Pick<
    TextInputProps,
    Exclude<keyof TextInputProps, 'value' | 'onChange'>
  > {
  value: valueType
  onChange: (value: valueType, event?: React.ChangeEvent) => void
}

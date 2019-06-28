import * as React from 'react'

import TextInputProps from './TextInput.interface'
import { Input } from './TextInput.style'

const TextInput: React.FunctionComponent<TextInputProps> = ({
  small = false,
  error = false,
  ...props
}) => <Input data-small={small} data-error={error} {...props} />

export default TextInput

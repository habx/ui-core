import * as React from 'react'

import TextInputProps from './TextInput.interface'
import { Input } from './TextInput.style'

const TextInput: React.ComponentType<
  TextInputProps & React.ClassAttributes<any>
> = React.forwardRef((props, ref) => {
  const { small = false, error = false, ...rest } = props
  return <Input data-small={small} data-error={error} {...rest} ref={ref} />
})

export default TextInput

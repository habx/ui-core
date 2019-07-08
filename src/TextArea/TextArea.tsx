import * as React from 'react'

import TextAreaProps from './TextArea.interface'
import { Input } from './TextArea.style'

const TextInput: React.ComponentType<
  TextAreaProps & React.ClassAttributes<any>
> = React.forwardRef((props, ref) => {
  const { small = false, error = false, ...rest } = props
  return <Input data-small={small} data-error={error} {...rest} ref={ref} />
})

export default TextInput

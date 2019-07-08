import * as React from 'react'

import useTheme from '../useTheme'

import TextInputProps from './TextInput.interface'
import { Input } from './TextInput.style'

const TextInput: React.ComponentType<
  TextInputProps & React.ClassAttributes<any>
> = React.forwardRef((props, ref) => {
  const { small = false, error = false, ...rest } = props
  const theme = useTheme()

  return (
    <Input
      data-small={small}
      data-error={error}
      data-background={theme.backgroundColor !== '#FFFFFF'}
      {...rest}
      ref={ref}
    />
  )
})

export default TextInput

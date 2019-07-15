import * as React from 'react'

import useTheme from '../useTheme'

import CheckboxProps from './Checkbox.interface'
import { Input, FakeInputContainer, FakeInput } from './Checkbox.style'

const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  error,
  value,
  checked,
  disabled,
  id,
  ...props
}) => {
  const theme = useTheme()

  return (
    <FakeInputContainer>
      <Input
        {...props}
        data-error={error}
        data-background={theme.backgroundColor !== '#FFFFFF'}
        checked={!!value || !!checked}
        disabled={disabled}
        type="checkbox"
        id={id}
      />
      <FakeInput tabIndex={disabled ? null : 0} htmlFor={id} />
    </FakeInputContainer>
  )
}

export default Checkbox

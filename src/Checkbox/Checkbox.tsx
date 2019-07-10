import * as React from 'react'

import useTheme from '../useTheme'

import CheckboxProps from './Checkbox.interface'
import { Input, FakeInputContainer, FakeInput } from './Checkbox.style'

const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  error,
  value,
  checked,
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
        type="checkbox"
      />
      <FakeInput tabIndex={0} />
    </FakeInputContainer>
  )
}

export default Checkbox

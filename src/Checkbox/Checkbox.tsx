import * as React from 'react'

import CheckboxProps from './Checkbox.interface'
import { Input } from './Checkbox.style'

const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  error,
  value,
  checked,
  ...props
}) => (
  <Input
    {...props}
    data-error={error}
    checked={!!value || !!checked}
    type="checkbox"
  />
)

export default Checkbox

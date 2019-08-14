import * as React from 'react'

import useTheme from '../useTheme'

import CheckboxProps from './Checkbox.interface'
import { Input, FakeInputContainer, FakeInput } from './Checkbox.style'

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { error, value, checked, disabled, id, ...rest } = props

    const theme = useTheme()

    return (
      <FakeInputContainer>
        <Input
          ref={ref}
          {...rest}
          data-error={error}
          data-background={theme.backgroundColor !== '#FFFFFF'}
          checked={!!value || !!checked}
          disabled={disabled}
          type="checkbox"
          id={id}
        />
        <FakeInput tabIndex={disabled ? undefined : 0} htmlFor={id} />
      </FakeInputContainer>
    )
  }
)

export default Checkbox

import * as React from 'react'

import useUniqID from '../_internal/useUniqId'
import useTheme from '../useTheme'

import CheckboxProps from './Checkbox.interface'
import { Input, FakeInputContainer, FakeInput } from './Checkbox.style'

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { error, value, checked, disabled, id, ...rest } = props
    const checkboxId = useUniqID(id)
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
          id={checkboxId}
        />
        <FakeInput tabIndex={disabled ? undefined : 0} htmlFor={checkboxId} />
      </FakeInputContainer>
    )
  }
)

export default Checkbox

import * as React from 'react'

import useHasColoredBackground from '../_internal/useHasColoredBackground'
import useUniqID from '../_internal/useUniqId'
import withLabel from '../withLabel'

import CheckboxProps from './Checkbox.interface'
import {
  Input,
  FakeInputContainer,
  FakeInput,
  CheckIcon,
} from './Checkbox.style'

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { error, value, checked, disabled, id, ...rest } = props
    const checkboxId = useUniqID(id)
    const hasBackground = useHasColoredBackground()

    return (
      <FakeInputContainer>
        <Input
          ref={ref}
          {...rest}
          data-error={error}
          data-background={hasBackground}
          checked={!!value || !!checked}
          disabled={disabled}
          type="checkbox"
          id={checkboxId}
        />
        <FakeInput tabIndex={disabled ? undefined : 0} htmlFor={checkboxId}>
          <CheckIcon icon="check" />
        </FakeInput>
      </FakeInputContainer>
    )
  }
)

export default withLabel<HTMLInputElement>({ orientation: 'horizontal' })<
  CheckboxProps
>(Checkbox)

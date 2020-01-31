import * as React from 'react'

import useHasColoredBackground from '../_internal/useHasColoredBackground'
import useUniqID from '../_internal/useUniqId'
import withLabel from '../withLabel'

import RadioInputProps from './RadioInput.interface'
import {
  Input,
  FakeInputContainer,
  FakeInput,
  InnerCircle,
} from './RadioInput.style'

const RadioInput = React.forwardRef<HTMLInputElement, RadioInputProps>(
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
          type="radio"
          id={checkboxId}
        />
        <FakeInput tabIndex={disabled ? undefined : 0} htmlFor={checkboxId}>
          <InnerCircle />
        </FakeInput>
      </FakeInputContainer>
    )
  }
)

export default withLabel<HTMLInputElement>({ orientation: 'horizontal' })(
  RadioInput
)

import * as React from 'react'

import useHasColoredBackground from '../_internal/useHasColoredBackground'
import useUniqID from '../_internal/useUniqId'
import withLabel from '../withLabel'

import { RadioInputInnerProps } from './RadioInput.interface'
import {
  Input,
  FakeInputContainer,
  FakeInput,
  InnerCircle,
} from './RadioInput.style'

const RadioInput = React.forwardRef<HTMLInputElement, RadioInputInnerProps>(
  (props, ref) => {
    const { error, disabled, id, ...rest } = props
    const checkboxId = useUniqID(id)
    const hasBackground = useHasColoredBackground()

    return (
      <FakeInputContainer>
        <Input
          ref={ref}
          {...rest}
          data-error={error}
          data-background={hasBackground}
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

export default withLabel<HTMLInputElement>({ orientation: 'horizontal' })<
  RadioInputInnerProps
>(RadioInput)

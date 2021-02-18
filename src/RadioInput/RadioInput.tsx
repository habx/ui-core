import * as React from 'react'

import { useUniqID } from '../_internal/useUniqId'
import { withLabel } from '../withLabel'

import { RadioInputInnerProps } from './RadioInput.interface'
import {
  Input,
  FakeInputContainer,
  FakeInput,
  InnerCircle,
} from './RadioInput.style'

const InnerRadioInput = React.forwardRef<
  HTMLInputElement,
  RadioInputInnerProps
>((props, ref) => {
  const { error, disabled, id: rawId, small = false, ...rest } = props
  const id = useUniqID(rawId)

  return (
    <FakeInputContainer>
      <Input
        ref={ref}
        {...rest}
        data-error={error}
        data-small={small}
        disabled={disabled}
        type="radio"
        id={id}
      />
      <FakeInput tabIndex={disabled ? undefined : 0} htmlFor={id}>
        <InnerCircle />
      </FakeInput>
    </FakeInputContainer>
  )
})

export const RadioInput = withLabel<HTMLInputElement>({
  orientation: 'horizontal-reverse',
})<RadioInputInnerProps>(InnerRadioInput)

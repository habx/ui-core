import * as React from 'react'

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
  const { error, small = false, ...rest } = props

  return (
    <FakeInputContainer>
      <Input
        {...rest}
        data-error={error}
        data-small={small}
        ref={ref}
        type="radio"
      />

      <FakeInput htmlFor={rest.id} tabIndex={rest.disabled ? undefined : 0}>
        <InnerCircle />
      </FakeInput>
    </FakeInputContainer>
  )
})

export const RadioInput = withLabel<HTMLInputElement>({
  orientation: 'horizontal-reverse',
})<RadioInputInnerProps>(InnerRadioInput)
